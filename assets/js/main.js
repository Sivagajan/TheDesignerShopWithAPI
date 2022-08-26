fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(shop => {

            console.log(shop)
            console.log(shop[0].image)

            let o = 0

            for(let i = 0; i < bilder.length; i++){
                
                if(o == shop.length){
                    
                    o = 0
                    i--
                }else{
                    
                    bilder[i].src = shop[o].image
                    bilderText[i].innerHTML = shop[o].title
                    console.log(shop[o].price)
                    bilderPreis[i].innerHTML = `$ ${shop[o].price}`
                    bilderKategorie[i].innerHTML = `${shop[o].category} `
                    o++
                //  index.html seite                   fakestore seite
                }
            }
            
        })


let bilder = document.getElementsByClassName('picture')
let bilderText = document.getElementsByClassName('cardText')
let bilderPreis = document.getElementsByClassName('cardPrice')
let bilderKategorie = document.getElementsByClassName('cardDesigner')
document.getElementsByClassName('pageGallery').st



console.log(bilderText[0])