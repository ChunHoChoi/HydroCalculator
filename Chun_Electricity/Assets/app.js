const buttonpressed = () => {
    const peakusage = document.getElementById("peakconsumption")
    const offpeakusage = document.getElementById("offpeakconsumption")
    const location = document.getElementById("location")
    const peakchargedisplay = document.getElementById("peakcost")
    const offpeakchargedisplay = document.getElementById("offpeakcost")
    const peakratedisplay = document.getElementById("peakrate")
    const offpeakratedisplay = document.getElementById("offpeakrate")
    const resultsflexbox = document.getElementById("resultsflexbox")
    const resultsheader = document.getElementById("resultsheader")
    const grossdisplay = document.getElementById("grosscost")
    const HSTdisplay = document.getElementById("HSTdisplay")
    const rebatedisplay = document.getElementById("rebate")
    const netcostdisplay = document.getElementById("netcost")

    const locationvalue = location.value
    const peakvalue = peakusage.value 
    const offpeakvalue = offpeakusage.value

    const parsedpeakvalue = parseFloat(peakvalue)
    const parsedoffpeakvalue = parseFloat(offpeakvalue)
    console.log (typeof(parsedpeakvalue))
    console.log (typeof(parsedoffpeakvalue))

    const notnumber = "potato"
    const parsednotnumber = parseFloat(notnumber)
    console.log ("notnumber is a " + (typeof(parsednotnumber)))

    const peakcharge = parsedpeakvalue * 0.132 
    const offpeakcharge = parsedoffpeakvalue * 0.065
    const HST = ((peakcharge + offpeakcharge) * 1.13)-(peakcharge + offpeakcharge) 
    console.log ("peak charge: " + peakcharge)
    console.log ("off-peak charge: " + offpeakcharge)
    console.log ("HST: " + HST)

    let inputsvalid = false
    let rebate = 0
    if (typeof parsedpeakvalue === "number" && typeof parsedoffpeakvalue === "number") {
        const inputsvalid = true
        if (locationvalue == "a" && inputsvalid == true) { 
            const rebate = (peakcharge + offpeakcharge)*0.08
            console.log("rebate is "+ rebate)
            const netconsumptioncharge = peakcharge + offpeakcharge + HST - rebate
            console.log ("net charge: "+ netconsumptioncharge)
            peakchargedisplay.innerText = "$" + peakcharge 
            offpeakchargedisplay.innerText = "$" + offpeakcharge
            peakratedisplay.innerText = peakvalue + " kWh @ $0.132/hr"
            offpeakratedisplay.innerText = offpeakvalue + " kWh @ $0.065/hr"
            grossdisplay.innerText = "Gross Charge: " + "$" + (peakcharge + offpeakcharge) 
            HSTdisplay.innerText = "13% HST: $" + HST
            rebatedisplay.innerText = "8% Rebate: $" + rebate
            netcostdisplay.innerText = "Total to Pay: $" + netconsumptioncharge
            resultsflexbox.style.display = "flex"
            resultsheader.style.display= "block"
        } else if (locationvalue =="b" && inputsvalid == true) { 
            const rebate = 0 
            console.log("no rebate")
            const netconsumptioncharge = peakcharge+offpeakcharge+HST-rebate
            console.log ("net charge: "+netconsumptioncharge)
            peakchargedisplay.innerText = "$" + peakcharge 
            offpeakchargedisplay.innerText = "$" + offpeakcharge
            peakratedisplay.innerText = peakvalue + " kWh @ $0.132/hr"
            offpeakratedisplay.innerText = offpeakvalue + " kWh @ $0.065/hr"
            grossdisplay.innerText = "Gross Charge: $" + (peakcharge + offpeakcharge) 
            HSTdisplay.innerText = "13% HST: $" + HST
            rebatedisplay.innerText = "Rebate: N/A"
            netcostdisplay.innerText = "Total to Pay: $" + netconsumptioncharge
            resultsflexbox.style.display = "flex"
            resultsheader.style.display= "block"
        }
        
    } else { 
        const inputsvalid = false

        if (inputsvalid ==false) {
        resultsflexbox.style.display = "none"
        resultsheader.style.display= "none"
        alert("Invalid Values Entered")
        }
    }
}
document.getElementById("calculate").addEventListener("click",buttonpressed)