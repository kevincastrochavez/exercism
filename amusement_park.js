/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
// function createVisitor(name, age, ticketId) {
//   return {
//     name: name,
//     age: age,
//     ticketId: ticketId,
//   };
// }

// console.log(createVisitor('Verena Nardi', 45, 'H32AZ123'));
// => { name: 'Verena Nardi', age: 45, ticketId: 'H32AZ123' }

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
// function revokeTicket(visitor) {
//   visitor.ticketId = null;

//   return visitor;
// }

// const visitor = {
//   name: 'Verena Nardi',
//   age: 45,
//   ticketId: 'H32AZ123',
// };

// console.log(revokeTicket(visitor));
// => { name: 'Verena Nardi', age: 45, ticketId: null }

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
// function ticketStatus(tickets, ticketId) {
//   let response = '';

//   for (const key in tickets) {
//     if (tickets[ticketId] === undefined) {
//       response = 'unknown ticket id';
//     }

//     if (tickets[ticketId] === tickets[key]) {
//       response = `sold to ${tickets[key]}`;
//     }

//     if (tickets[ticketId] === null) {
//       response = 'not sold';
//     }
//   }

//   return response;
// }

// const tickets = {
//   '0H2AZ123': null,
//   '23LA9T41': 'Verena Nardi',
//   QINS6S94: 'Hong Hsu',
//   V42NWRMQ: null,
// };

// console.log(ticketStatus(tickets, 'V42NWRMQ'));
// console.log(ticketStatus(tickets, 'A56MTX8E'));
// console.log(ticketStatus(tickets, 'QINS6S94'));
// // => 'unknown ticket id'

// console.log(ticketStatus(tickets, '0H2AZ123'));
// // // => 'not sold'

// console.log(ticketStatus(tickets, '23LA9T41'));
// // // => 'sold to Verena Nardi'

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
//  * @param {Record<string, string|null>} tickets
//  * @param {string} ticketId
//  * @returns {string} ticket status
//  */
function simpleTicketStatus(tickets, ticketId) {
  let response = '';

  for (const key in tickets) {
    console.log(tickets[ticketId]);
    if (tickets[ticketId] === null || tickets[ticketId] === undefined) {
      response = 'invalid ticket !!!';
    } else {
      response = tickets[ticketId];
    }
  }

  return response;
}

const tickets = {
  '0H2AZ123': null,
  QINS6S94: 'Hong Hsu',
};

console.log(simpleTicketStatus(tickets, 'QINS6S94'));
// => 'Verena Nardi'

// console.log(simpleTicketStatus(tickets, '0H2AZ123'));
// // => 'invalid ticket !!!'

// console.log(simpleTicketStatus(tickets, 'RE90VAW7'));
// => 'invalid ticket !!!'

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
// function gtcVersion(visitor) {
//   for (const key in visitor) {
//     if (key == 'gtc') {
//       return visitor.gtc['version'];
//     }
//   }
// }

// const visitorNew = {
//   name: 'Verena Nardi',
//   age: 45,
//   ticketId: 'H32AZ123',
//   gtc: {
//     signed: true,
//     version: '2.1',
//   },
// };

// console.log(gtcVersion(visitorNew));
// // => '2.1'

// const visitorOld = {
//   name: 'Verena Nardi',
//   age: 45,
//   ticketId: 'H32AZ123',
// };

// console.log(gtcVersion(visitorOld));
// // => undefined
