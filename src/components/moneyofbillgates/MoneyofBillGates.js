import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {decrementPieceofHamburder, decrementPieceofHome, decrementPieceofShip, incrementPieceofHamburder, incrementPieceofHome, incrementPieceofShip } from '../../redux/moneyofbillgates/remainder'
function MoneyofBillGates() {

    const products = useSelector(state => state.remainder.products)
    const totalMoney = useSelector(state => state.remainder.totalMoney);
    const receipt = useSelector(state => state.remainder.receipt)
    const dispatch = useDispatch();

    console.log(products)
    console.log(products[0].hamburger)
    console.log(totalMoney)
    console.log(receipt)

  return (
    <div>
        <div style={{textAlign : 'center'}}>
            <img style={{width : '40%', borderRadius : '50%'}} src='https://wp-assets.futurism.com/2022/05/bill-gates-billionaire-microsoft-global-economy-meltdown-prediction.png' alt='' />
            <h1>Spend Bill Gates' Money</h1>
        </div>
        <div style={{fontSize : '48px', margin : '5% auto', textAlign :'center', backgroundColor :'green', padding :'2%'}}>${totalMoney}</div>
        <div style={{display :'flex', flexDirection : 'row', justifyContent :'space-around', padding :'2%'}}>
            <div style={{margin : '2% 2%'}}>
                <div style={{textAlign : 'center'}}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1FqVnALqv0iy4ITLyPoESDP0z-ZwUVssknQ&usqp=CAU' alt=""/>
                    <p style={{fontSize : '24px'}}>Hamburger</p>
                    <p><strong>${products[0].hamburger}</strong></p>
                </div>
                <div style={{textAlign : 'center', justifyContent :'space-between'}}>
                    <button onClick={()=>dispatch(decrementPieceofHamburder())} style={{margin : '2% 2%', backgroundColor : 'grey', padding :'2%', fontWeight :'bold', borderRadius : '10px'}}>Sell</button>
                    <span style={{margin : '2% 2%', backgroundColor : '', padding :'2%', fontWeight :'bold', border :'1px solid black'}}>{products[0].piece}</span>
                    <button onClick={()=>dispatch(incrementPieceofHamburder())} style={{margin : '2% 2%', backgroundColor : 'green', padding :'2%', fontWeight :'bold', color :'white', borderRadius : '10px'}}>Buy</button>
                </div>
            </div>
            <div style={{margin : '2% 2%'}}>
                <div style={{textAlign : 'center'}}>
                    <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYZGBgaHBoaGhoaHBgZHhocHBwcGhwaGh4cIy4nHCQsIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJSs0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAEYQAAIBAQUEBwYDBQcEAgMBAAECEQADBBIhMQVBUWEGInGBkaGxEzJCwdHwUnLhFCNigpIVM0OistLxFlPC4iSjg5PjB//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACgRAAICAQQCAgIBBQAAAAAAAAABAhESAyExQRNRYXEEIoEjMkKhsf/aAAwDAQACEQMRAD8A3AKmBThakBXvtnnDAVICpBamFqGwIAU+GphaWGlYUQw0+GphakFpWOiGGlhq0JThKVhRUFqQWrQtOEqch0VhKkEqwJVqpScilEoFnU8FEYABJgDnUGtVAnXnoPE1m5pFKBSbOoMlZ1v0ksBaLZ+1QNvGZH8zxA7fGtlCH07xv++dKOqmNwaBCtNFXulQK1qpWTiVxTxUopwKdiojFKKnFILSsdEaep4aWGiwohFKKkRTRRYyJFRIqyKYilkMrilFTiniixkIpRU4pRU2OiuKUVZSpWFFWGmirYpRRZVAYWpBakFqQWuqzkGUVMLTqtWBazbKSIYaWGrIqQSpyHRWFqQSkbVB8UngMz5VXaXvCJgIOLkeg+tRLUSLUGy9UpnZVyLCeGp8BXP3/pLYpILlz+Fch2GPmKwbz0otWyskCDidfvwrGWuujRaL7O3vN6wiVA1iXOEdnfp30RZWqkZnCd4YgEfWvIb7Z2lscTuzHt08609k9IrW7wlqPaWY0mcS/lNZLWle5fiVbHpxtlGgJ56DxNZl+6QWVn7zqD+FOsfH6Vh3lP2xcd3t2cRnZkhWX6+nOsX9iCHCRB3gwPmKJTk+AUEuTYvPSt2n2Vn/ADOcR8KybzbW9r/eu0Hd7oHZp61JLP7z+hq1wNMvL6iopvkfHBS3RksmKAG1VfiPPkdCBqZ8Y7L25a3YhXl7MacV/Kd3py31sXbaOFQGUsRAVpOcbmOojLMTPLU5d4TFOIyTqchn2AgeVFeh37O42btezt0xKwOme8T+Ibu3Q0a9nXk2B7F8dkxU8vPd98663YHS9XhLWEbnkp7D8B8uyYrWOpWzIlH0dRgpwlXq6FS2IADWYEds6VXdL3Y2uVna2b8kdWPgDWvkM8RglPhoo2NRNnRmFA+GmIq8pUStPIdFBFMRVrCqyKMh4kYpjUqY08gxI0qUUopWOhUqUU8UWOhopRUopRSsdEYpRU4p4pWMFC1MCnAqQFdLZyUICpBaSirAKlspIyttC0Vcdm8BZxiCer+IZiI38uyuWXbK2rhDbNiJChS9ogJJyGGCpMxXf15pt3YRu19sLRB+6tLazI/gbGpKdmpHKRurj/IyX7RZ0aWL2aN20d0GFrZln+OyB7iVU+dc5tWxbHBtGcET1mGskEEDI6edenbTuqWiEOv+Uz5VwO0dmBGJUd/WX1FcGnryk6kdctJJXEyLO7qNwPhR1yuuN0TTEYnPLefIGo3WyDOinMFlBgrMEgZV2SXW7WbyFRGXmREjmY0NdkUjmk2h7Po1Z4R1VP5ixJ7YgCsrbPRcIpdBkASR70gawcjPI101hftysrDhM5d26pXh8YKkAAgjLmI31mo6mW9UW5Rx25PKP2d0bHZsyMMwRIrdu3SVLQezviw2gtUiRzI3/eRozaGwGs0LhwwGZEQY45HOucvIUyInx/WqacSU7Nm8bHtwMdlaWVpZnMORB7GwjIju7qH9leR8CN+W0A8mNF9HboAoNi9qjkdaMUE6GUZGWJmJ7RrU7zcFZz+/dXmGC4EJPMIUz7t9R5o+9y/FL0AN7YDrXa07VC2n+kUM+0MPvpaJ+ZGHzq622itm5QW1o0ZYsCsJ3jMmaYbf3e37mRl/0gCnmHj+QywuJdcRKqCAYIMidJEZd5qi12NZH37b+jCPmx8qEs7X2rgB1adwOnzrrk2OIGBMWQnQa9tS5tq+hqKTOee53aAGFpaYfdxNaOByAJUAchVqWVhEG7Lh1HUQweIzme+ujTZD/hUZxn2TRllcweqAJmPCpjPK6fASil0YN02iLP3LS1TkWcqOxWLqPCti69JNxZH7wreeEf5aZ9kneqnXyoe8bGUqwIwsIgjODIg5bs6cZt8OxOMfR0Nxvy2swpUjcTu4jiMj4UQy1yWxP2jGFwdZDBI0jfJ0AMeldk6VtCbfJnKKXAKVqBWiClMbOtchUDFaiVon2dL2dPMKBStNhov2VL2VLIKBMNPhog2dP7OjIdA4WnC1dhp8NLMKKglPhqzDT4anMKALNp+Ejtj5VaFqQWpRXY5HPiMBT04FPFS5DojFV3m6paLgdZEq3YykMrDgQQDV8VNUrKUrRaVGKt4JB6sfyN6o1Y9/bM69/tV9ZpWTawg1/Ap/0tVV4I4kcsNqPRjXkxjTPRb2ALKz/eIZA66/FPxDiK6q9XZizHCSCB8Lct8cq5yxPXTM+8u9+I4iuza9OD1WXDumO/WN9deUox/VWc7jGT3Mq6WOF5gDqxrnpwmoWlgCzkCZacj28K12vTMIbBHIj607205GzVgMuM+Rp+aSjbRPijdJmNfkIsLaZ+H3vzbprnrjdMR3f5fkRXZ7XsFFgxVQspJCgCM1yMDtrl7BtJy7T/uSonNyjfBcIqLo6/YOGzGSnth/XOuL25s9TeLe2VGLG0frszEAlQMkVRuPxE57q27velUR1f8A6vqKoxA+0OWbknT8Cdvqa4t4nSkm7Adl7HsjYIXRWbrCTIJhjvEbqxOk+zbOzKYFw4gxObGYIjU9vjXRDags0CYAQCc8QGpn50NfbjaXso2D2aKCCz5ZGDIEydN8Cu2DyRzTVM5ro3Y/vj+X5ivS7vawsZ6LoOVc1s7ZdgjxZWwe0AIKkiG0PUgZxG4mukuzSCN4iRvGtGqq02TF3JFtmzOeqrmDOR5RxqmwZg2YzDHLxq+xZlnCSJ1gkT4VG7qS5nMljme+uf8AHv8Ab6L1OvsIQk6q3xbwde+iLg825193fluFRs0I3UNecrR/yj0WnpOrfpMJK6+zD2nty+2N4tBZhHssRKhgmhA3gqT3k0RdemjnK1urjnZsH/yn61x/Szo+4tnvCsQHIMqSCOqF3burr9nAFhbLpb2ne7EeBNdafwZUezXbpJdn1dkPC0R08yMPnWpYOjiUdXHFWDDyrwZr/eU/x+4qh/8AGa1rn0gcYT7zwJJGHPkQePIU7FR7P7Gqb3eLOxGK1dEH8bBZ7Ade6vPLvtjaF5XDZvgQauJUd7tLdynuFDlLGyYtnerbe7zgU8Rri8+0UUB2z9IrIgsis6D/ABG/dp3F8z2hY51qXK3W0WVyOWJd4+o4GvK77dbe8guzE4JKgZKCIyReMHw1Ok2bD2+93ZUcmB7rCMvy7v5TkeVJuhpWertZVA2dU7K2sluozGI6EaN2Tof4TnWgyUnJoAM2dN7OiilQKVOQ6KMFNhq8rSilkBmAVICkBTgV2uRjiICovaKnvMq/mIHrVgFYd/6Nq7F0crPwkIR3FlJ7iazlKilEuv8A0ku1kuVojtuRGVj3kHqjt7prlrx0stHaQSg3KjEAeGvaaa/2TWDQ6HtKp5dTPuq67XTHZi1VEIJIzRd2ugrnlqxfLo2jptdGX+2JMlM9+ZPzzp3vinMCKJtMK5GwQ9iD/cKq/abPfY+Cf/0qFh7Lbl6B/wBq4FvH6CoremByYjx+Ro1bew32J/oYej0/tLt+Aj+sfM1SlFdktSfQKL/aDRz3F/rVqbUtPxk9pPzq3HdeEfzP/tp8F2bRiOwv80p5L2LF+hDa7kFWaQcoy05kCassbyOK9zOPnVTXS7H/ABG/qHzQUv2Cw3Wrf1J+lTLfsqLroOS9E5KCeQc/Oaqs74y4g9laDE0yqM2UAbionKhP7PWRgvGGDME2Znt64JHKa1+j90xWmC1tUtcQyCizsysTJ6jdbdlyrNqK53LuT42BH2wiRgu9q7fitBEdmZ8o7ag+30b+9S0PKFw9wn1rr75sOyAlMQP52+tYlrdipgT3s/1qlrx4SM/E3vZi3na91cQVcHd1QIPKGqCdJwhhy9om5oIdR+b4+/Pma1xZOdR5k+s0XdtkBzBj+lD6rTevFD8Uim77RsXUMLYMp4tgYcmRoIPdWtdlUiQZ5g/Os3amwks0ZwiuQDC4EGI7lmMpNZFwvroJF1dDvVMEd5Vo8jWkNaD4IlpyR13suBbxNQtMQ6waTzz7jvrE/wCoHGt2tu4TQ986RsVOGwtcW7EpA74rX9HyZVIH6T7fUqbHDhYe+SREGGgcd1ca15ZvcHf4nT60RfVZ3L2gIZjLEqwGQCqBAJ0ArSuFndjhV7dsTZKiIwk55SRG/gKxlNR44NowbANnbHtLZoVS7Tmdwz+JjkOzXPlXQ2Ozrtdv7w/tFoP8NPcU6dc7+w/01deLmtkfZtb3hAfhlsGfLDAoZ7KyUAIxbmQAPTWnGcZcOwlGS5RZfb7aWohzhQaWaAqoG6RGff5VQLMDd6fSnkcv8tPPZ999WiGH3C/qi4HnKWUiM5IOEncZkgndluAOVerEPOIDPgIHcBpVxOf6n603395VYgK4320uzSJZN4MnLnx7dR5V6X0e6TJaqAzTlrqV/N+IfxeNee2iA7vvwrOfHZNjsyQQZgTJPIDOezzrKUaKTvk93icxpUCtefdG+ltsixbWFphngBI/EoYjCeWh5V3F02tY2sYHEn4WlDPCGie6smOggpTYKvK02GpsZ4Ps/pheysm2JIMHEqGeGoy7q0k6d3kCCtkx4lWEc4DR97q4jZ9pDx+IeY0+dHWhA1yrqszNW26X345i8RnoEswB2dU0Mel99Ot5fuCD0Wg2usoXDLuAEyxneANwkT21lWl3AaSs8RQ2BtWvSG8Of3lszjTC7HDxmARB5jOvT+ibY9lrhyLe1ggloONxIJJO7jXkl3sEIkKPCvXuhiAXCzUCB+8y7XesdWNo003ucls20tnvKozllxsIOHQTlpNbW0rmQ6hSQCskCBniYfSo7OsgLwM9GbeP4uVa+0mhkPI7xx7Odckr8TfydKpTS+Btn9Hw6YsQ1jPPzp710Unenn9KPuT4ru41626N2E8KzL/dnLZWjoGQBVBwiQBJkLO6uXZVZpbbe5jXnoYZ+Dz+lSunQ5v4PE/Sun2KSs2bsXOFc2ksp39Yga0DtC9A25RXtEKCWAVgh6yH3og5SNd5qrdWF70Su/RNozC+NCbQ2Dg3CddJrcRy2mKOr6VLbLjEoP4Rw4njU3taslN5UzlmuACYygnhEb4o3YlxQWlnaAQet6MKKt1Bs+UHh+I1bs9YWzP5/wDyro3bXyiW9n9iv14cuwxQJMAQMqit1Yp7SQVxRrnMT4UFtV1c4WVG65EOY+EtmADyoG4PhtbNFCANZMxCMSJBQScsjnXNKLt2UltYbfh1RH4h6Gmu1u6sIYx4+tW3/wB0dv1qmwzde35Vj+ylsy9qNG9W7vZgkDFPYKpazYrpZA/kYnxxirzoBAOe/Snxv+Gz4e8Ry4V2uMumZKUezCtRahoGD+j/ANq0rjdnObJZvyBdD49arSCXw4EmJnGY8Yq2ytj/ANtOHvnny5UVNdg5RZVblQwUWVohJAHWDrJ5gz5VWts4DSchOk9wzMUXZWwZs0ClXQSDMyc/vnQ9tGYG/wC+FTK+yonO3nbC2zAOrZcET5NU1srsNfaDXQDXxrYu/RlsZcrKwCTIESTI4+FWDYyNPUH/AOxz862hKP8AjsRJ+9znj7CMntMUj4THPIVB/YyItHA+KUfXlA4V0Y6PoWwezWSJ/vG0mNaduiynP2a8f7010xfyZNr0cwfYmf3vZKP59WkEs4ytVnhhYeq10qdGEZQwsxnp+9+tUnoymLDgIJE++NKbl8k7ejC/Y0Jyt0jjFAXq6Liw+2Q98fOuqtej6IuIh4AnJ0076HbouXdGswxG8EifiPLLKsp6rXLLjGL6On6N9HBY2ZNuVtCYYEljhEaGao2r0qud0cIvswxAxMgGQbjhEncSOY50N0m6V2dldnRc3AFnhIBAMQcQJBAyPl3eJ2rEtqSTp4xSj+3ApXds9qvn/wDo1gFhBNplkSMOucMDB7MjmOdZe0tv2ds5dbw6SB1VMgGNAVUg9s15QTaWb6kMpEgZjcV5NqMs+ytfZu1rNVONQCTMBctAOPKm4voSa72AU2PeZB9m4AIzwPlnrpXW/wDTDnL2iSe09sVs2z9SMv8ADH+WajZXtFwFmA6hw7pY4gAOc1T1pMtaMUrMcdFnBgOk8M9By7x5VReejNpGWE/1fSuotEK2yg5ELaTmMjNlllpWdtfbthZYktHKsyGBhdsmEDMAjWaFOTFhGrvY4e83C1sjIQRvg/UV6z0KtCbjYEiJx5a/G9csemdzGrtpHuP9K7fYfXsLN191xjWcjhZiRkcxkRWibfJGMVwzJuyxeDn8T7/zboonaze5n+LeR+HlTXayY3hsjkz5yefKKu2vYsFUgEwW0xZSB+EcjWNf0n9mrf8AVX0X7IabFxr1jv8A4V0JFU7QtURSzAyq788IjODgbdyqGyrfBYu0MYYZKHc54BkIk67qFv8AfHtLJ/ZKzEr1UZCuMncMUVwaqqSOmCu2H7GvCMQwnEcp4xOpwLMfKnv4sxaMWQdbquThznCIzQ4pAAgnlQHRm3tjhV7B7JQWyazcDVozK8M5nfFWdIbG8K2JFlMQdsk1XDBl+w6U2mo7+wpOWxq3V00RWAECMlAgQIEcqo205xL+QaTxPAVmbI2n1mRlggTkVMZwdKjt/aqC0VMQkKAd8Gd8ER+oogm07FKNSNAGbKeTceJqy4t1E7W/8qDsto2HssJtUmCMjOZkgZTOoqzZt+sSir7WzlS09ZcpnnzFdijvF/Bzvv7PNemygX62nfgP/wBafSi+gY/+T22b+q1Pp9dP/kG2RlZGRBIdJxAERhnFoJ0iq+gBm9f/AI3/APGlqcMqPB321UwrHBvrQt0zdO08eBqe276vsTaZTkcMgGTuz01rM2BtdHfE6MmDWAX94GPdXLf4VxKD2Zre1HS4TijTOr1LD7FAna13mQ7bz7j9v4aPs3DAMNCARuyOldzVpHPQ4JnFAnTdpTZxkAPv/mlj60cpqRNKh0D2gIjjjU7hvFZt5YhvD71rSvdoFUEgnMaRuM7+yso23tCxVWEcY+U1hNGkUa9lezgADZkiRIzz7aDut6tOtLTnGi6SeA51TZFgRrEjjx/JRVikFu351r+PDZ/wZ6nKLhe7QMHkYowzA014Vcu0bX8Q04L9OVDEadppxXdGK9GMi5b9aKAqkQMhkPpVX7W5YGRIEDIaeFVI+ISRGuR7akNacoIlPcH2leXK4Q0A5GAuYHatFXK8sq6kGMonWTQ95WY76hgkgA6ASO0kj4TXL+TBYKjbT3bPJ+kN8LXm1xEkh7QCeTGhLAL78Azpy7RV/TC4PZXq0xKcLsbRDBhlYzl2EkHsoK6EMvvSczvkeE5VUUsVRnK8nY94cMcyMshlprlAHM1OywxnZoTvLfLP7M1L+zg8sHC8ipOfd9KPstgKRONs8/dX/dVWkJQk+C59sXlgesoBKydT1RhGW7XvoR7Is2J7TEYEkyTw9KCa9ADUdgzoO0tnbkKhRFlOR11xLrBS0cawQqWYzifeyM4V8KxelSO1ojMxfqRMhozJIOEQNaEs9m25E4X7zh/1ETVVpdWUw6kHnw792Rq44r7HjJ8slsRnS8WTKWU41EjIwxAIyz0NekM7mJtLTfMvaHfAJz0rz3ZqRbWZ/jT/AFCvSSSclmetEZrqYLdYn/mtI0waaKUsXaffY6nrtHrxG41Zc7NQWI/AWEkMc5OoM93KohAczB0gYdd+TBNDprlFWvbqA/wl1dBJeJIIBgwMxFE6xYRvJFdntB0BCWjqCZgK3lPdR+y7dLRffcFImQBOLrSMzXNWd1LAgOmXLfzk0Et2vFnJa1QACD10mBJAVY5nhrXnSSl/B6EZ4r79HUHa74iC7gATJKRGe+sO/wC2ntMQLEpmC2TCI/CNT6VXdrwj+/bBRGWMr8x2eFDXm42JzF5AgHIYzPCIqotvaVhcf7kBW16AdhDb82cqcgciBI41YohZZ4iICkGNPe1zz9aijWDBg1o2SmJDHEfw5HLPfUPaWIEYmaIgnFBHYfd8xVp/Bld72bt2vKYQssW55hjxGeUeeVbN3ubWbuloMwVJiSOsBnPh4VxNytQxOhkkSTmNfDTzrrtlX1rR3LtjbqZkKdygQIgZVtHgiW+6IbZ2M15RUsSgZWxEu2EYYYRIBzzGVN0V6NW12vHtbV7IrgZYRnYyYjLCOHGjtoXtLJFZ8eEkKMI/MQMjmMqzf7UsjpZ27/y/+1c+rKdtJbFwiq3Y3SfaJwWii2Uh39xkbEIcKsGdMKqcxxzqroPaBvbTH+HoMIg4+LHfNTtL0j5fslq35l/Q091t3syTY3N0LCGIwrIzierzPjUb401/wrFXd/6Ne+WcEmRnBgEzIkjUafc11N0XqJ+RfQVyVgbS0TE9ngfPqwxgqcjixfEPCujud6cIqkDIAZgbuMGts4xirZGDbdB5TOaWGhzeH1lfCoPeHOrR2ZHxFS9aI/Gyy/2fU7xWBcNsWCgoVcEHM4AZJ4Qa2JJBUsSJnM4v9U8NNKzW2MgLFXIxDQqDHZEVlKSkzSKpUJ9s2J91HM/wD5tWpYprIg/ryrITYqzJtCf5QPn9wKOS7sJPtnMknUZb4A3VtpzhC+TKUXINKUsHKsq3sW/71p3OR6Vn211b/u2h/nf61vH8heiHos6Q2Z4VBlAOZA7SK5G02eSc3Y9pJqptmndPev651XnT6J8NHVXu9IglnXfp1vJZrA23fms7YPZuvWQAiAwMFuOU/e+qFujg5jyiikR13nxrOU8lVGkYqPZjXu9Wl4XA7WTxmAVQFTxUrmDWE9wtlki7Wi84Ofcda9AS1f8AF4kVcLy/48qSfVCcE3dnl730p1HRk3icQnIZQa07pbSoKq0ffOuyvd3W0EOzEcntI7xirL/6bu+7EOU/pTqxJNdnnlmgJgDM6CJJ5CtJtmWlmntHsyFGeeuXLWPrQN3srVDKnC2YkQct+oq20W8P7zlsozLRA5DLefE0P7I8kSu22k7EBZI4R951pbKZ3wrgd2Qk5LiMawRnllWedmuMywHjV1ld7VRCWpUbwpYTPGOwUpY1sEdSMXdhj2oQyylW97NYOecxl21PZm3nxgOQBPvPOEeAJ8qCGznYyXk65gz3k9lOuyXPxDwNSqXZU9WEnbOk/tWHwWAW1LCeqpygZgZDKIoTbV4t8DI6pAIlwRAMyq6CTlmNY4Z1lWezbVfdfBMThxKcjIOWeoB7qSbEYmS4Ynf1mPr203P2ycoA91RCVV3AG9usQOZAzNa+1LmPZLapiYDql3XBInCuFcUnLfn27qHGwDvcdy/+1StNjEmXtWYjIEgmOQxMcvrUOSvkfkiuKMyyfDqZ7QPvjTveuX33VprsMHV28h6042Io+JvFcvKhyj2w80UqRiC0gkxrrnrUjfX0y+91dAmw04z/ADUSlws1HuL2nP1mk9SAvN6OYsb3GgEaQMo5+uVGWN6tDJRSC0SVXM94HKugWxUaYR3AVZZ6xIn+U7/0pPUXQLW+CVz2xb/Fd07SxTxjF6VqjbDxmig8i3zArLZTOvymqi5H0146eFYSkvQ/PJ9mv/bbfwg9hPoai22H/h7gfrWQLU9k78NOLVuI8/vjWeTDzSfZpnalruI8B86sG1bUcD6+ArHNod54bj9ioM5GpPr6xRcmLyy9m4m2XHvKI5T9ii7LbCHWV7cx5fOuXW0O75eZFI2vPnmc+3nTUmhrWkjs0vIbNSD2Gaf2+41xadXMNB75HHMUdZbWdQMRxDgwHqDWsZx7Ra1/Z0jW4+/Sme3Ma1i2W2E+JSnMdYd8UVZ3lH91wZ7j4HOtoqMuGWtRMJNvx8KQt+cGh2XnGX3nTOjCOEc/lWigJzCGtm5+FOtsd7ffdQAciYPjTpbAnrAnlM+H2avFCsLZ+Jnx+tRa1B3kR51Q8agEDhP6UxJjeR4/808RWFlhGUffbTIRuX08PSqGOWnofSKksnPQafpTUQsvD55VD2sZfI1Ux48t5+zSlefiB5RToDiEAjTPfNTDZcPGh+6PPs17atCRoDPcK5jzi5cIHHlz7qkG4GfLw/4odDG6PD69tTDk7yB4fKp3FYZZOIzDDdpNTN44Ty3UOlok+kzP3rTOw3qM9D961nW4WErbH7/SprbEDTlx8jQpGhjLu/TLSp4oGhHZnp2UmNMKDzmG8h8qTtlrn991Be2gHVvucgdcqbHJknsg6d0c6KHYWzxpHiINW2NpPxAcvlurPFru17ZB8eNWi3iIUAnLOB991DQ0aEHeAR97jTWiDWAY4ifn20Gyz96/ee+kMhnl5RwBNRRSDkcboI47gKjh5HlB9c86GFodCQZzE5g99OJndlkTr8/nUj4L0t84Mjjmak5xZwPCfPOqGxakjwGXfTo+4g9v/FFBYzqAOI8/0qk20Z598bpzmeVXyNxjfAIk7zVDKNQc+E5Hf3UqQWSS9zlmeHDypftZE/MTrlQjKeHcTr4U6PxOfLMinigthJtQd3eM/KmJMTBPMYfPIVRBAktPiD4Z0yuToG8R2Zg00Flmp3k5agHLnToDnBjsJz7pqAXFqQCO0GfQ0msz+bvE+eenA0bAmWlu/dlHoKiVnQ6btKgrE5RIHGPLOpAjfy1z8DuoVooIsb7apoxI7mAoyw20fjQdqmPLfWZkT9QIPfVbNuOWWWY9K0jqyiNSaOmsr6j6NP5hhPoKuie3jx+dcliJyHyXhrU0vboeqxUdpj5jwraOv7Ra1DqAgO+eU0wCiREHnEeVY9ltl5h1VhxXI+laVhtCzcalTwbPz/Wt46sZdlqSLFy0OHnOXlNP7Rt5k7svlFT9nvUzwP39ahaFt8k5awQOWYzrWh2MrH4h2Egz5CafA/4T991QdzoY7JUeROdSQZe96/SjgZw4BjNRwPHuqUE6ZTuzjw3UqVch5xELnmc/pnVh5R99lKlSYMkzGIgH0pnJ+GO+T20qVIBG0J1J3Z/D5DnV46sT6z86VKikNCkAbu0Df2+NRVZMSTGUGe7TTfSpVAF1jkAfHM+WVTB4mNOY4eo8qVKpfJUSStuzHCCe7LT/AIpRxYGddNPnrSpVJRZMxPfMR5ffjUoWB8pHDupUqlgxsQzz3fLWqrRiQMxO6Jz18N2dKlQkIZHU+8N/Hh5irA0ZCeWeevOmpU2A1qJ/Xhw1+4qh9M89SDkZyyz1FNSpANAyM8dxO7T7NImdSRPZ5+VKlTARUifIiZ8N2hpvbMNJPb47+2lSoAsF5nJgD/Euoq1bZRrLbo893KKVKk0ihftAGi+MtpwBzqGMGNxPKPAEZ0qVAIWAcv8AMP07vpSkaCOYI13bu0UqVCGQJXQKQeEnLdlUcBOZM8NZ0pUqaBD2F9ZPdLDt+cjL77aOsekDL7wB5g7tKVKtYTkhqTNCw2pZPliCngZX9DRfYwju/wBw9KVKu2E20WpM/9k=' alt=""/>
                    <p style={{fontSize : '24px'}}>Home</p>
                    <p><strong>${products[1].home}</strong></p>
                </div>
                <div style={{textAlign : 'center', justifyContent :'space-between'}}>
                    <button onClick={()=>dispatch(decrementPieceofHome())} style={{margin : '2% 2%', backgroundColor : 'grey', padding :'2%', fontWeight :'bold', borderRadius : '10px'}}>Sell</button>
                    <span style={{margin : '2% 2%', backgroundColor : '', padding :'2%', fontWeight :'bold', border :'1px solid black'}}>{products[1].piece}</span>
                    <button onClick={()=>dispatch(incrementPieceofHome())} style={{margin : '2% 2%', backgroundColor : 'green', padding :'2%', fontWeight :'bold', color :'white', borderRadius : '10px'}}>Buy</button>
                </div>
            </div>
            <div style={{margin : '2% 2%'}}>
                <div style={{textAlign : 'center'}}>
                    <img src='data:image/jpeg;base64,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' alt='' />
                    <p style={{fontSize : '24px'}}>Ship</p>
                    <p><strong>${products[2].ship}</strong></p>
                </div>
                <div style={{textAlign : 'center', justifyContent :'space-between'}}>
                    <button onClick={()=>dispatch(decrementPieceofShip())} style={{margin : '2% 2%', backgroundColor : 'grey', padding :'2%', fontWeight :'bold', borderRadius : '10px'}}>Sell</button>
                    <span style={{margin : '2% 2%', backgroundColor : '', padding :'2%', fontWeight :'bold', border :'1px solid black'}}>{products[2].piece}</span>
                    <button onClick={()=>dispatch(incrementPieceofShip())} style={{margin : '2% 2%', backgroundColor : 'green', padding :'2%', fontWeight :'bold', color :'white', borderRadius : '10px'}}>Buy</button>
                </div>
            </div>
        </div>
        <div style={{textAlign  : 'center'}}>
            <h1>Your Receipt</h1>
            <div>
                <div>
                    <span style={{margin : '1% 5%'}}>Hamburger</span>
                    <span style={{margin : '1% 5%'}}>X{products[0].piece}</span>
                    <span style={{margin : '1% 5%', color : 'green'}}>${products[0].price}</span>
                </div>
                <div>
                    <span style={{margin : '1% 5%'}}>Home</span>
                    <span style={{margin : '1% 5%'}}>X{products[1].piece}</span>
                    <span style={{margin : '1% 5%', color : 'green'}}>${products[1].price}</span>
                </div>
                <div>
                    <span style={{margin : '1% 5%'}}>Ship</span>
                    <span style={{margin : '1% 5%'}}>X{products[2].piece}</span>
                    <span style={{margin : '1% 5%', color : 'green'}}>${products[2].price}</span>
                </div>
            </div>
            <div style={{color :'green'}}><strong>Total</strong>: { -1 * receipt}</div>
        </div>
    </div>
  )
}

export default MoneyofBillGates