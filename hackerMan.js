let a = ["010101010100101010010100001010010100101010010100101010010101010010100101010101010101010010101010010101010010101010100101010010110101000001111110101110101010101101110101010101010110101011111010010100101011111010010101010111111111010101011111110010101001011111110010100101000110100101010010101001010100101010010101001010010100101011111101001010010101010100101010010100001010010100101010010100101010010101010010100101010101010101010010101010010101010010101010100101010010110101000001111110101110101010101101110101010101010110101011111010010010101010100101010010100001010010100101010010100101010010101010010100101010101010101010010101010010101010010101010100101010010110101000001111110101110101010101101110101010101010110101011111010010100101011111010010101010111111111010101011111110010101001011111110010100101000110100101010010101001010100101010101010011100101010101010011", "110101010111111100101010010111111100101001010001101001010100101010010101001010100101010010100101001010111111010010100101010101001010100101000010100101001010100101001010100101010100101001010101010101010100101010100101010100101010101001010100101101010000011111101011101010101011011101010101010101101010111110100101001010111110100101010101111111110101010111111100101010010111111100101001010001101001010100101010010101001010100101010010100101001010111111010010101010101010110101011111010010100101011111010010101010111111111010101011111110010101001011111110010100101000110100101010010101001010100101010010101001010010100101011111101001010010101010100101010010100001010010100101010010100101010010101010010100101010101010101010010101010010101010010101010100101010010110101001010101010010101001010000101001010010101100101010100101001010101010101010100101010100101010100101010101", "000111111010111010101010110111010101010101011010101111101001010010101111101001010101011111111101010101111111001010100100010100001010010100101010010100101010010101010010100101010101010101010010101010010101010010101010100101010010110101001010101010010101001010000101001010010101100111010101011111110010101001011111110010100101000110100101010010101001010100101010010101001010010100101011111101001010010101010100101010010100001010010100101010010100101010010101010010100101010101010101010010101010101010101111111001010100101111111001010010100011010010101001010100101010010101001010100101001010010101111110100101001010101010010101100101010101001010100101101010001010100101001010101010101010100101010100101010100101010100010101011111110010100101000110100101010010101001010100101010010101001010010100101011111101001010101010101011010101111101001010010101111101001010101011111111"]
let b = a[0];
let c = a[2];

let check = Array.from(document.getElementsByClassName("check"))

function checkall() {
  if (check[2].checked) {
    check[0].checked = true
    check[1].checked = true
  }
}
function hack() {
  let side = Array.from(document.getElementsByClassName("side1"));
  let clear1 = setInterval(() => {
    if (b == a[0]) {
      b = a[1]
    } else {
      b = a[0]
    }
    side[0].innerHTML = b
  }, 300)
  let clear2 = setInterval(() => {
    if (c == a[2]) {
      c = a[1]
    } else {
      c = a[2]
    }
    side[1].innerHTML = c
  }, 250)
  let text = Array.from(document.getElementsByClassName("text"))
  let target = document.getElementById("target").value
  // Async Await 
  const hackapi = async function() {
    // clear screen
    {
      for (let i = 1; i < text.length; i++) {
        text[i].innerHTML = " "
      }
    }
    // screen cleared

    let step1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[1].innerHTML = "Hijacking user..."
        resolve(1)
      }, 1000)
    })
    let step2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = "user located"
        resolve(1)
      }, 1000)
    })
    let step1a = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = `username:${target} ; `
        resolve(1)
      }, 1000)
    })
    let step1b = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML += ` password:XXXXXXX ;`
        resolve(1)
      }, 500)
    })
    let step1c = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML += ` number:+91XXXXXXXXXX`
        resolve(1)
      }, 800)
    })
    let step3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[3].innerHTML = "getting device info..."
        resolve(1)
      }, 1000)
    })
    if (check[0].checked) {
      let step5 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[4].innerHTML = "facebook hacked"
          resolve(1)
        }, 1000)
      })
    }
    if (check[1].checked) {
      let step5 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[4].innerHTML = "Instagram hacked"
          resolve(1)
        }, 1000)
      })
    }
    let step5 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[4].innerHTML = "resetting passwords..."
        resolve(1)
      }, 1000)
    })
    let step6 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = "access granted to phone"
        resolve(1)
      }, 1000)
    })
    let step7 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = "logs generated"
        resolve(1)
      }, 1000)
    })
    let step8 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[5].innerHTML = "hacking status: pending..."
        resolve(1)
      }, 1000)
    })
    let step9 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[5].innerHTML = "hacking status: hacked! succesfully -_+"
        resolve(1)
        clearInterval(clear1)
        clearInterval(clear2)
        side.forEach((x) => {
          x.innerHTML = "Hacker Man"
        })
      }, 3000)
    })
  }
  hackapi( )}
