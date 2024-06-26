snippetData=[
  {
    "category": "Programming",
    "body": [
      {
        "subCategory": "Javascript",
        "language": "javascript",
        "content": [
          {
            "heading": "Random String",
            "description": "Generates a alphanumeric characters string with the specified length.",
            "code": "\n btoa(Math.random()).substr(0, 10); \n"
          },
          {
            "heading": "Heads or Tails?",
            "description": "Divides a random number between 0 and 1, checks if it is lesser or greater than 0.5(thus giving 50-50 probability), and returns heads or tails.",
            "code": "\n Math.random() >= 0.5?console.log('heads'):console.log('tails');\n            "
          },
          {
            "code": "\n str.split('').reverse().join('');\n          ",
            "description": "Where str is the string to reverse.",
            "heading": "Reverse a string"
          },
          {
            "code":"delete Object.assign(objName, {['newKey']: objName['oldKey'] })['oldKey'];",
            "description":"Replaces an object's key with a new key",
            "heading":"Rename an object key"
          },
          {
            "code": "\n export function getAllSiblingsOfElement(){\n   const siblings = ele => [].slice.call(ele.parentNode.children).filter((child) => (child !== ele));\n   return siblings;\n }\n                  ",
            "description": "Gets all the siblings of a DOM element.",
            "heading": "Get the siblings of a DOM element"
          },
          {
            "code": "\n export function insertElementAfter(){\n   const insertAfter = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling);\n     //OR\n   const insertAfter = (ele, anotherEle) => anotherEle.insertAdjacentElement('afterend', ele);\n }\n      ",
            "description": "Inserts an element after the provided element.",
            "heading": "Insert element after an element"
          },
          {
            "code": "\n export function insertElementBefore(){\n   const insertBefore = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle);\n     // OR\n   const insertBefore = (ele, anotherEle) => anotherEle.insertAdjacentElement('beforebegin', ele);\n }\n      ",
            "description": "Inserts an element before the provided element.",
            "heading": "Insert element before an element"
          },
          {
            "code": "\n export function insertHtmlAfter(){\n   const insertHtmlAfter = (html, ele) => ele.insertAdjacentHTML('afterend', html);\n }",
            "description": "Inserts an HTML after the provided element.",
            "heading": "Insert HTML after an element"
          },
          {
            "code": "\n export function insertHtmlBefore(){\n   const insertHtmlBefore = (html, ele) => ele.insertAdjacentHTML('beforebegin', html);\n }",
            "description": "Inserts an HTML before the provided element.",
            "heading": "Insert HTML before an element"
          },
          {
            "code": "\n export function replaceElement(){\n  const replace = (ele, newEle) => ele.parentNode.replaceChild(newEle, ele);\n }\n",
            "description": "Replaces an element with another element.",
            "heading": "Replace an element"
          },
          {
            "code": "\n export function stripHtmlFromText(){\n  const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';\n }\n",
            "description": "Strips HTML from a given text.",
            "heading": "Strip HTML from text"
          },
          {
            "code": "\n export function getUniqueLetters(chars){\n  return Array.from(new Set(chars.toLowerCase().replaceAll(' ','').split('')));\n }\n",
            "description": "Strips duplicate charactes and spaces, then returns a collection of unique elements.",
            "heading": "Get unique letters"
          },
          {
            "code": "\n export function getFactorial(f){\n  let j=1;for(let i=1;i<=f;i++){j=i*j};return j};\n }\n",
            "description": "Returns factorial of the given number.",
            "heading": "Get factorial"
          },
          {
            "code": "\n export function replaceURLs(text) {\n return text.replace( /(https?:\/\/[^\s]+)/g, '<a href=\"$1\" target=\"_blank\">$1</a>' ); }\n",
            "description": "parses all URLs into <a> tags.",
            "heading": "Parse URLs inside string"
          },
          {
            "code": "\nfunction factorialCalculate(number) {\n  if (number === 0) {\n    return 1;\n  } else {\n    return number * factorialCalculate(number - 1);\n  }\n}",
            "description": "Calculates the factorial of a number using a recursive function.",
            "heading": "Calculate Factorial"
          },
          {
            "code": "fetch(apiUrl)\n  .then(response => {\n    if (response.status === 200) {\n      return response.json();\n    } else {\n      throw new Error('Error in the request');\n    }\n  })\n  .then(data => {\n    console.log(data);\n  })\n  .catch(error => {\n    console.error('Error:', error);\n  });",
            "description": "Simple fetch function to call an API",
            "heading": "Simple fetch to call API"
          },
          {
            "code": "\n export function getFibonacci(n) {\n let a=0;b=1;ans=0; for(let i=2;i<=n;i++){ans=a+b; a=b;b=ans;} return ans; \n} \n",
            "description": "Return the number in Fibonacci Series at index n.",
            "heading": "Fibonacci series"
          }
        ]
      }
    ]
  }
]
