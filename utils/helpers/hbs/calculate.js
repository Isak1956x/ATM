function modeA(amount)
{
    let thousandBucks = 0;
    let twoHundredBucks = 0;


    while (amount >= 1000)
    {
        thousandBucks += 1;
        amount -= 1000;
    }
    while (amount >= 200)
    {
        twoHundredBucks += 1;
        amount -= 200;
    }

    return {'thousand': thousandBucks, 'twoHundred': twoHundredBucks};
}
function modeB(amount)
{
    let fiveHundredBucks = 0;
    let hundredBucks = 0;
 
    while (amount >= 500)
    {
        fiveHundredBucks += 1;
        amount -= 500;
    }
    while (amount >= 100)
    {
        hundredBucks += 1;
        amount -= 100;
    }
    return {'fiveHundred': fiveHundredBucks, 'hundred': hundredBucks};
}



function efficientMode(amount)
{
    let thousandBucks = 0;
    let fiveHundredBucks = 0;
    let twoHundredBucks = 0;
    let hundredBucks = 0;
 
    while (amount >= 1000)
    {
        thousandBucks += 1;
        amount -= 1000;
    }
    while (amount >= 500)
    {
        fiveHundredBucks += 1;
        amount -= 500;
    }
    while (amount >= 200)
    {
        twoHundredBucks += 1;
        amount -= 200;
    }
    while (amount >= 100)
    {
        hundredBucks += 1;
        amount -= 100;
    }
    return {'thousand': thousandBucks, 'fiveHundred': fiveHundredBucks, 'twoHundred': twoHundredBucks, 'hundred': hundredBucks};
}

export {modeA, modeB, efficientMode};