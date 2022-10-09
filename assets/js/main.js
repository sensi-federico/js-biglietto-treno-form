


function genera() {
    const name = document.getElementById("name_lastname").value;
    document.getElementById("name").innerHTML = name;

    const distance = document.getElementById("distance").value;
    document.getElementById("km").innerHTML = distance;

    const age = document.getElementById("age").value;
    document.getElementById("eta").innerHTML = age;

    const ticketPrice = distance * 0.21;
    const ticketPriceStamp = ticketPrice.toFixed(2) + " euro";    
    document.getElementById("price").innerHTML = ticketPriceStamp;


    if (age < 18) {
        const discount = ticketPrice * 20 / 100;
        priceDiscounted = ticketPrice - discount;
        document.getElementById("price").innerHTML = priceDiscounted.toFixed(2) + " euro";

        let offer = "Minorenne";
        document.getElementById("offerta").innerHTML = offer;
    } else if (age > 65) {
        const discount = ticketPrice * 40 / 100;
        priceDiscounted = ticketPrice - discount;
        document.getElementById("price").innerHTML = priceDiscounted.toFixed(2) + " euro";

        let offer_2 = "Anziano";
        document.getElementById("offerta").innerHTML = offer_2;
    } else {
        let offer_3 = "Adulto";
        document.getElementById("offerta").innerHTML = offer_3;
    }
};
