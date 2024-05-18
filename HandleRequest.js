addEventListener('fetch', event => {

  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

  // Set Telegram URL
  const telegramURL = 'https://api.telegram.org/bot{BOT-TOKEN}/sendMessage'


  const requestBody = await request.text()

  // Create Telegram Request ===>
  const telegramRequest = new Request(telegramURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: '{Chat-ID}',
      text: requestBody
    })
  })

  // Send Request ===>
  const Result = await fetch(telegramRequest)

  //  Get And Return Response to (Client Or Server)
  return new Response(await Result.text(), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })

}
