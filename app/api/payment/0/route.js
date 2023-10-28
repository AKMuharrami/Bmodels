const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer sk_test_XKokBfNWv6FIYuTMg5sLPjhJ'
    },
    body: JSON.stringify({
      amount: 1,
      currency: 'KWD',
      customer_initiated: true,
      threeDSecure: true,
      save_card: false,
      description: 'Test Description',
      metadata: {udf1: 'Metadata 1'},
      reference: {transaction: 'txn_01', order: 'ord_01'},
      receipt: {email: true, sms: true},
      customer: {
        first_name: 'test',
        middle_name: 'test',
        last_name: 'test',
        email: 'test@test.com',
        phone: {country_code: 965, number: 51234567}
      },
      source: {id: 'src_all'},
      post: {url: 'http://localhost:3000/products/0'},
      redirect: {url: 'http://localhost:3000/products'}
    })
  };
  
  fetch('https://api.tap.company/v2/charges', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    const goptions = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer sk_test_XKokBfNWv6FIYuTMg5sLPjhJ'
        }
      };
      
      fetch('https://api.tap.company/v2/charges/charge_id', goptions)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));