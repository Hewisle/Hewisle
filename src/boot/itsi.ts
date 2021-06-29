/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { boot } from 'quasar/wrappers'
import { config } from 'dotenv'
import { sign, verify } from 'jsonwebtoken'
import crypto from 'crypto'

const cfg = config().parsed as { TOKEN: string }
const { TOKEN } = cfg

const genToken = (id = crypto.randomBytes(16).toString('hex')) => {
  return sign({ id }, TOKEN, { expiresIn: 2700 }) as unknown as string
}

export default boot(/*async*/({ store, ssrContext }) => {
  const pendingSession = ssrContext?.$q.cookies.has('ticket')
  let storeTicket = ''

  if (pendingSession) {
    // Verify ticket
    const ticket = ssrContext?.$q.cookies.get('ticket') as string
    verify(ticket, TOKEN, function (err, decoded) {
      if (decoded) {
        storeTicket = ticket
      } else {
        if (err && err.name && err.name !== 'TokenExpiredError') {
          console.error('Invalid token', err?.message)
        }
        storeTicket = genToken()
      }
    });
  } else {
    storeTicket = genToken()
  }

  store.commit('spaceship/setItsiToken', storeTicket)
  ssrContext?.$q.cookies.set('ticket', storeTicket, { httpOnly: true, secure: true })
})
