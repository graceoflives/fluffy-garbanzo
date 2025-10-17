Decimal.config({
    precision: 13
});
//GLOBAL VARIABLES
var rawSaveGame = '';
var rawData = "";
var hs = Decimal(0);
var ascZone = new Decimal(0);
var ancientTableShow = 0;
var summonedAncients = 0;
var ratio = Decimal(1);
var isSaveLoaded = false;
var additionalASShow = new Decimal(0);
var ancient = {
    "4": {
        "AncientId": 4,
        "Name": "Libertas",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "true",
    },
    "5": {
        "AncientId": 5,
        "Name": "Siyalatas",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "true",
    },
    "8": {
        "AncientId": 8,
        "Name": "Mammon",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "true",
    },
    "9": {
        "AncientId": 9,
        "Name": "Mimzee",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "true",
    },
    "10": {
        "AncientId": 10,
        "Name": "Pluto",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "false",
    },
    "11": {
        "AncientId": 11,
        "Name": "Dogcog",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "true",
    },
    "12": {
        "AncientId": 12,
        "Name": "Fortuna",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "true",
    },
    "13": {
        "AncientId": 13,
        "Name": "Atman",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "true",
    },
    "14": {
        "AncientId": 14,
        "Name": "Dora",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "true",
    },
    "15": {
        "AncientId": 15,
        "Name": "Bhaal",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "false",
    },
    "16": {
        "AncientId": 16,
        "Name": "Morgulis",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "true",
    },
    "17": {
        "AncientId": 17,
        "Name": "Chronos",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "true",
    },
    "18": {
        "AncientId": 18,
        "Name": "Bubos",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "true",
    },
    "19": {
        "AncientId": 19,
        "Name": "Fragsworth",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "false",
    },
    "20": {
        "AncientId": 20,
        "Name": "Vaagur",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "false",
    },
    "21": {
        "AncientId": 21,
        "Name": "Kumawakamaru",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "true",
    },
    "22": {
        "AncientId": 22,
        "Name": "Chawedo",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "false",
    },
    "23": {
        "AncientId": 23,
        "Name": "Hecatoncheir",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "false",
    },
    "24": {
        "AncientId": 24,
        "Name": "Berserker",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "false",
    },
    "25": {
        "AncientId": 25,
        "Name": "Sniperino",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "false",
    },
    "26": {
        "AncientId": 26,
        "Name": "Kleptos",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "false",
    },
    "27": {
        "AncientId": 27,
        "Name": "Energon",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "false",
    },
    "28": {
        "AncientId": 28,
        "Name": "Argaiv",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "true",
    },
    "29": {
        "AncientId": 29,
        "Name": "Juggernaut",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "false",
    },
    "31": {
        "AncientId": 31,
        "Name": "Revolc",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "false",
    },
    "32": {
        "AncientId": 32,
        "Name": "Nogardnit",
        "Level": Decimal(0),
        "OptimalLevel": Decimal(0),
        "CostToOptimal": Decimal(0),
        "Visible": "true",
    },
}
var outsider = {
    "1": {
        "Name": "Xyliqil",
        "Level": Decimal(0),
        "Multiplier": Decimal(0)
    },
    "2": {
        "Name": "Chor'gorloth",
        "Level": Decimal(0),
        "Multiplier": Decimal(0)
    },
    "3": {
        "Name": "Phandoryss",
        "Level": Decimal(0),
        "Multiplier": Decimal(0)
    },
    "4": {
        "Name": "Borb",
        "Level": Decimal(0),
        "Multiplier": Decimal(0)
    },
    "5": {
        "Name": "Ponyboy",
        "Level": Decimal(0),
        "Multiplier": Decimal(0)
    },
    "6": {
        "Name": "Borb",
        "Level": Decimal(0),
        "Multiplier": Decimal(0)
    },
    "7": {
        "Name": "Rhageist",
        "Level": Decimal(0),
        "Multiplier": Decimal(0)
    },
    "8": {
        "Name": "K'Ariqua",
        "Level": Decimal(0),
        "Multiplier": Decimal(0)
    },
    "9": {
        "Name": "Orphalas",
        "Level": Decimal(0),
        "Multiplier": Decimal(0)
    },
    "10": {
        "Name": "Sen-Akhan",
        "Level": Decimal(0),
        "Multiplier": Decimal(0)
    },
}

//SUMMATIONS
function approSum(n) {
    var m = n.plus(1);
    var loc1 = m.sqrt();
    var loc2 = m.times(loc1);
    var loc3 = m.times(loc2).times(0.4);
    var loc4 = loc2.times(0.5);
    var loc5 = loc1.times(0.125);
    var loc6 = Decimal(0.00052).div(loc2);
    return loc3.minus(loc4).plus(loc5).minus(loc6).ceil();
}

//FORMAT FUNCTIONS
function decFormatNoGrouping(num) {
    return num.toFixed(0);
}

function decFormatEasyCopy(num) {
    if (num.gte(100000)) {
        var rs = Decimal(num).toFixed(0);
        var x10 = 0;
        while (rs[rs.length - 1] === "0") {
            x10++;
            rs = rs.substring(0, rs.length - 1);
        }
        if (x10 == 0)
            return rs;
        else
            return (rs + 'e' + x10);
    } else
        return decFormatNoGrouping(num);
}

function fracFormat(num) {
    return num.toFixed(2);
}

function sciFormat(num, decimalPoint) {
    if (num.gte(100000))
        return Decimal(num).toExponential(decimalPoint).toString().replace("+", "");
    else
        return decFormatNoGrouping(num);
}

//SUPPORT FUNCTIONS
function calcTranscendentPower() {
    var totalAS = Decimal(rawData.ancientSoulsTotal);
    return Decimal(25).minus(Decimal(23).times(totalAS.times(-0.0003).exp())).div(100);
}

function getHeroSouls(flag_use_next_ascension_soul) {
    var a = Decimal(rawData.heroSouls);
    if (flag_use_next_ascension_soul)
        a = a.plus(Decimal(rawData.primalSouls)).plus(Decimal(rawData.totalHeroLevels).div(2000).floor());
    return a;
}

function showHeroSouls(hs) {
    $("#manualHS").val(decFormatNoGrouping(hs));
}

function getAscensionZone() {
    var _loc1 = Decimal(rawData.highestFinishedZonePersist);
    if ($("#ascensionZone").val() != '')
        var _loc2 = Decimal($("#ascensionZone").val());
    else
        var _loc2 = Decimal(0);
    var _loc3 = (_loc1.gte(_loc2)) ? _loc1 : _loc2;
    return _loc3;
}

function showAscensionZone(ascZone) {
    $("#ascensionZone").val(ascZone.toString());
}

function getCurrentRatio() {
    var s = ancient["5"].Level;
    var f = ancient["19"].Level;
    if (s.equals(0))
        if (f.gt(0))
            $("#playstyleSelect").prop('selectedIndex', 2).change();
        else
            $("#playstyleSelect").prop('selectedIndex', 0).change();
    else if (f.equals(0))
        $("#playstyleSelect").prop('selectedIndex', 0).change();
    else if (f.div(s).lt(0.1))
        $("#playstyleSelect").prop('selectedIndex', 0).change();
    else if (f.div(s).gt(1000))
        $("#playstyleSelect").prop('selectedIndex', 2).change();
    else {
        ratio = f.div(s).round();
        $("#hybridRatio").val(ratio.toString());
        $("#playstyleSelect").prop('selectedIndex', 1).change();
    }
}

function linearX(a, x)
{
    return a.times(x/100);
}

function getSolomonMultiplier(solomonLevel, ponyboyMultiplier) {
    var result = solomonLevel.times(5);
    for (var i = 1; i < 5; i++)
        if (solomonLevel.gt(i * 20))
            result = result.minus(solomonLevel.minus(i * 20));
    result = result.times(ponyboyMultiplier.plus(1)).div(100).plus(1);
    return result;
}

function showASGain(moreAS) {
    var as = Decimal(rawData.ancientSoulsTotal);
    var totalHSEarned = Decimal(rawData.heroSoulsSacrificed).plus(Decimal(rawData.heroSouls));
    if ($("#useNextAscensionSouls").prop("checked"))
        totalHSEarned = totalHSEarned.plus(Decimal(rawData.primalSouls));
    for (var k in rawData.ancients.ancients)
        totalHSEarned = totalHSEarned.plus(Decimal(rawData.ancients.ancients[k].spentHeroSouls));
    var currentASGain = Decimal.log10(totalHSEarned).times(5).floor().minus(as);
    $("#asGainIfTranscend").text(currentASGain.toString());
    for (var k = 1; k < 4; k++) {
        $("#asGain" + k).text(currentASGain.plus(k).plus(moreAS).toString());
        $("#hsToGain" + k).text(sciFormat(Decimal(10).pow(as.plus(currentASGain).plus(k).plus(moreAS).div(5)).minus(totalHSEarned), 4));
    }
}

function getNUALevel(a, b, c, d, s, threshold) {
    var testvalue = d.div(a);
    var _min = Decimal.min(c, c + s);
    var _max = Decimal.max(c, c + s);
    var _loc1 = Decimal(b).plus(Decimal.ln(2));
    var _left = Decimal.floor(Decimal.ln(d.div(a).div(_max)).div(_loc1));
    var _right = Decimal.ceil(Decimal.ln(d.div(a).div(_min)).div(_loc1));
    if (threshold > 0) {
        if (_left.gte(threshold)) {
            return Decimal(threshold);
        }
    }
    for (let i = _left; i.lte(_right); i = i.plus(1)) {
        if (Decimal.pow(2 * Math.exp(b), i).times(Decimal.pow(Math.exp(1), i.times(-b)).times(s).plus(c)).gte(testvalue)) {
            return Decimal.max(1, i);
        }
    }
    return _right;
}

function getDogcogLevel(m, apply_limit = true) {
    dogcog_limit = (apply_limit) ? 3743 : 0;
    return getNUALevel(200 * Math.log(2), 0.01, 1 / 9999999999, m.times(0.927).pow(2), 1, dogcog_limit);
}

function getFortunaLevel(m, apply_limit = true) {
    fortuna_limit = (apply_limit) ? 14972 : 0;
    return getNUALevel(800 * Math.log(2), 0.0025, 10 / 9, m.times(0.927).pow(2), -1, fortuna_limit);
}

function getAtmanLevel(m, alpha, apply_limit = true) {
    atman_limit = (apply_limit) ? 2880 : 0;
    return getNUALevel(2 / 0.013 * Math.log(2), 0.013, 4 / 3, m.pow(2).div(alpha), -1, atman_limit);
}

function getDoraLevel(m, apply_limit = true) {
    dora_limit = (apply_limit) ? 18715 : 0;
    return getNUALevel(1000 * Math.log(2), 0.002, 100 / 99, m.times(0.927).pow(2), -1, dora_limit);
}

function getChronosLevel(m, apply_limit = true) {
    chronos_limit = (apply_limit) ? 1101 : 0;
    return getNUALevel(2 / 0.034 * Math.log(2), 0.034, 2, m.pow(2), -1, chronos_limit);
}

function getBubosLevel(m, apply_limit = true) {
    bubos_limit = (apply_limit) ? 18715 : 0;
    return getNUALevel(100 * Math.log(2), 0.002, 1, m.pow(2), 1, bubos_limit);
}

function getKumaLevel(m, alpha, apply_limit = true) {
    kuma_limit = (apply_limit) ? 1498 : 0;
    return getNUALevel(200 * Math.log(2), 0.025, 0.25, m.pow(2).div(alpha), 1, kuma_limit);
}

//MAIN FUNCTIONS
function loadGame(dataInput) {
    rawSaveGame = dataInput;
    rawData = decoder.decode_main(dataInput);
    //load Outsiders
    for (var k in outsider) {
        if (!!rawData.outsiders.outsiders[k]) {
            outsider[k].Level = Decimal(rawData.outsiders.outsiders[k].level);
        }
    }
    //load Ancients
    for (var k in ancient) {
        ancient[k].OptimalLevel = Decimal(0);
        ancient[k].CostToOptimal = Decimal(0);
        if (!!rawData.ancients.ancients[k]) {
            ancient[k].Level = Decimal(rawData.ancients.ancients[k].level);
            summonedAncients++;
        } else
            ancient[k].Level = Decimal(0);
    }
    isSaveLoaded = true;
}

function showOutsider() {
    var tb = document.getElementById("osdtable");
    for (var k in outsider) {
        tb.rows[k].cells[1].innerHTML = outsider[k].Level.toString();
    }
    //calculate the multipliers
    outsider[1].Multiplier = Decimal(1.5).pow(outsider[1].Level);
    outsider[2].Multiplier = Decimal(1).minus(Decimal(0.95).pow(outsider[2].Level));
    outsider[3].Multiplier = outsider[3].Level;
    /*outsider[4].Multiplier = outsider[4].Level.div(10);*/
    outsider[5].Multiplier = outsider[5].Level.pow(2).times(10);
    outsider[6].Multiplier = linearX(outsider[6].Level, 10);
    outsider[7].Multiplier = linearX(outsider[7].Level, 25);
    outsider[8].Multiplier = linearX(outsider[8].Level, 50);
    outsider[9].Multiplier = linearX(outsider[9].Level, 75);
    outsider[10].Multiplier = linearX(outsider[10].Level, 100);

    //show data
    tb.rows[1].cells[2].innerHTML = "+" + sciFormat(outsider[1].Multiplier.times(100), 4) + "% effective of all Idle bonuses";
    tb.rows[2].cells[2].innerHTML = "-" + fracFormat(outsider[2].Multiplier.times(100)) + "% Ancient cost";
    tb.rows[3].cells[2].innerHTML = "+" + outsider[3].Multiplier.times(100).toString() + "% DPS";
    /*tb.rows[4].cells[2].innerHTML = "+" + outsider[4].Multiplier.times(100).toString() + "% maximum transcendent primal soul reward";*/
    tb.rows[5].cells[2].innerHTML = "+" + outsider[5].Multiplier.times(100).toString() + "% Primal Hero Souls";
    tb.rows[6].cells[2].innerHTML = "+" + outsider[6].Multiplier.times(100).toString() + "% effective of Kumawakamaru";
    tb.rows[7].cells[2].innerHTML = "+" + outsider[7].Multiplier.times(100).toString() + "% effective of Atman";
    tb.rows[8].cells[2].innerHTML = "+" + outsider[8].Multiplier.times(100).toString() + "% effective of Bubos";
    tb.rows[9].cells[2].innerHTML = "+" + outsider[9].Multiplier.times(100).toString() + "% effective of Chronos";
    tb.rows[10].cells[2].innerHTML = "+" + outsider[10].Multiplier.times(100).toString() + "% effective of Dora";

    var tp = calcTranscendentPower();
    var as = Decimal(rawData.ancientSoulsTotal);
    var totalHSEarned = Decimal(rawData.heroSoulsSacrificed).plus(Decimal(rawData.heroSouls));
    for (var k in rawData.ancients.ancients)
        totalHSEarned = totalHSEarned.plus(Decimal(rawData.ancients.ancients[k].spentHeroSouls));
    var currentASGain = Decimal.log10(totalHSEarned).times(5).floor().minus(as);
    $("#tp").text(fracFormat(tp.times(100)));
    $("#as").text(as.toString());
    $("#asGainIfTranscend").text(currentASGain.toString());
    showASGain(additionalASShow);
}

function compute(x) {
    var HPscale = Decimal(1.14).plus(ascZone.div(500).ceil().times(0.005));
    if ($("#wep8k").prop("checked"))
        var alpha = Decimal(1.1085).times(Decimal.ln(calcTranscendentPower().plus(1))).div(Decimal.ln(HPscale));
    else
        var alpha = Decimal(1.4067).times(Decimal.ln(calcTranscendentPower().plus(1))).div(Decimal.ln(HPscale));
    var playStyle = $("#playstyleSelect").val();
    var s, f, m;
    switch (playStyle) {
        case "idle":
            s = ancient[5].Level.plus(x);
            f = Decimal(0);
            m = s;
            break;
        case "hybrid":
            s = ancient[5].Level.plus(x);
            f = s.times(ratio);
            m = Decimal.max(s, f);
            break;
        case "active":
            s = Decimal(0);
            f = ancient[19].Level.plus(x);
            m = f;
            break;
    }
    //get the "base level" (unlimited) for Revolc, Vaagur and skill ancients
    switch ($("#otherAncientsLowerBase").val()) {
        case "11":
            var base_level_for_no_formula = getDogcogLevel(m, false);
            break;
        case "12":
            var base_level_for_no_formula = getFortunaLevel(m, false);
            break;
        case "13":
            var base_level_for_no_formula = getAtmanLevel(m, alpha, false);
            break;
        case "14":
            var base_level_for_no_formula = getDoraLevel(m, false);
            break;
        case "17":
            var base_level_for_no_formula = getChronosLevel(m, false);
            break;
        case "18":
            var base_level_for_no_formula = getBubosLevel(m, false);
            break;
        case "21":
            var base_level_for_no_formula = getKumaLevel(m, alpha, false);
            break;
    }
    //find the Optimal Level with pre-determined Siya lvl
    for (var i in ancient) {
        if (ancient[i].Level.gt(0) && (ancient[i].Visible == "true")) {
            switch (i) {
                case "4": //Libertas
                    if ($("#wep8k").prop("checked"))
                        ancient[i].OptimalLevel = s.times(0.905).ceil();
                    else
                        ancient[i].OptimalLevel = s.times(0.926).ceil();
                    break;
                case "8": //Mammon
                case "9": //Mimzee
                    if ($("#wep8k").prop("checked"))
                        ancient[i].OptimalLevel = m.times(0.905).ceil();
                    else
                        ancient[i].OptimalLevel = m.times(0.926).ceil();
                    break;
                case "5": //Siyalatas
                    ancient[i].OptimalLevel = s;
                    break;
                case "10": //Pluto
                    if ($("#wep8k").prop("checked"))
                        ancient[i].OptimalLevel = f.times(0.905).ceil();
                    else
                        ancient[i].OptimalLevel = f.times(0.926).ceil();
                    break;
                case "11": //Dogcog
                    ancient[i].OptimalLevel = getDogcogLevel(m);
                    break;
                case "12": //Fortuna
                    ancient[i].OptimalLevel = getFortunaLevel(m);
                    break;
                case "13": //Atman
                    ancient[i].OptimalLevel = getAtmanLevel(m, alpha);
                    break;
                case "14": //Dora
                    ancient[i].OptimalLevel = getDoraLevel(m);
                    break;
                case "15": //Bhaal
                    ancient[i].OptimalLevel = f;
                    break;
                case "16": //Morgulis
                    ancient[i].OptimalLevel = m.pow(2);
                    break;
                case "17": //Chronos
                    ancient[i].OptimalLevel = getChronosLevel(m);
                    break;
                case "18": //Bubos
                    ancient[i].OptimalLevel = getBubosLevel(m);
                    break;
                case "19": //Fragsworth
                    ancient[i].OptimalLevel = f;
                    break;
                case "21": //Kuma
                    ancient[i].OptimalLevel = getKumaLevel(m, alpha);
                    break;
                case "28": //Argaiv
                    ancient[i].OptimalLevel = m;
                    break;
                case "29": //Juggernaut
                    ancient[i].OptimalLevel = f.pow(0.8).ceil();
                    break;
                case "32": //Nogardnit
                    if ($("#wep8k").prop("checked"))
                        ancient[i].OptimalLevel = s.times(0.905).pow(0.8).ceil();
                    else
                        ancient[i].OptimalLevel = s.times(0.926).pow(0.8).ceil();
                    break;
            }
        }
    }
    for (var i in ancient) {
        if (ancient[i].Level.gt(0)) {
            switch (i) {
                case "20": //Vaagur
                    ancient[i].OptimalLevel = Decimal.min(1440, Decimal.max(base_level_for_no_formula.minus($("#otherAncientsLower").val(), 0)));
                    break;
                case "31": //Revolc
                    ancient[i].OptimalLevel = Decimal.min(3743, Decimal.max(base_level_for_no_formula.minus($("#otherAncientsLower").val(), 0)));
                    break;
                case "22": //Chawedo
                case "23": //Hecatoncheir
                case "24": //Berserker
                case "25": //Sniperino
                case "26": //Kleptos
                case "27": //Energon
                    ancient[i].OptimalLevel = Decimal.max(base_level_for_no_formula.minus($("#otherAncientsLower").val(), 0));
                    break;
            }
        }
    }
    //find the HS requirement to reach that lvl
    var totalHS = Decimal(0);
    for (var i in ancient) {
        var temp = Decimal(0);
        var x = ancient[i].Level;
        var y = ancient[i].OptimalLevel;
        if ((y.gt(x)) && (ancient[i].Visible === "true") && (rawData.ancientEntrySizes[i] != 1)) {
            switch (i) {
                case "29":
                case "32": //n^1.5
                    temp = approSum(y).minus(approSum(x));
                    break;
                case "4":
                case "5":
                case "8":
                case "9":
                case "10":
                case "15":
                case "19":
                case "28": //n
                    temp = y.times(y.plus(1)).div(2).minus(x.times(x.plus(1)).div(2));
                    break;
                case "11":
                case "12":
                case "13":
                case "14":
                case "17":
                case "18":
                case "20":
                case "21":
                case "22":
                case "23":
                case "24":
                case "25":
                case "26":
                case "27":
                case "26":
                case "31": //2^n
                    temp = Decimal.pow(2, y.plus(1)).minus(Decimal.pow(2, x.plus(1)));
                    break;
                case "16": //1
                    temp = y.minus(x);
                    break;
            }
        }
        ancient[i].CostToOptimal = temp.times(Decimal(1).minus(outsider[2].Multiplier)).ceil();
        totalHS = totalHS.plus(ancient[i].CostToOptimal);
    }
    return totalHS;
}

function optimizeAncient() {
    //optimize
    if (summonedAncients != 0) { //check if no Ancient summoned
        var left, right, base, hsToSpend, hsSpare;
        if ($("#playstyleSelect").val() == "active")
            base = ancient[19].Level;
        else
            base = ancient[5].Level;
        if (compute(0).gt(hs)) {
            left = base.neg();
            right = Decimal(0);
        } else {
            left = Decimal(0);
            right = hs.div(Decimal(1).minus(outsider[2].Multiplier)).plus(base.times(base.plus(1)).times(2)).sqrt().ceil().minus(base);
        }
        while (right.minus(left).gt(Decimal.max(1, Decimal.max(base, right.plus(base)).times(1e-11)))) {
            var mid = right.plus(left).div(2).floor();
            hsToSpend = compute(mid);
            if (ancient["16"].Level.equals(0))
                hsSpare = Decimal.pow(Decimal.max(ancient["5"].OptimalLevel, ancient["19"].OptimalLevel), 2);
            else
                hsSpare = 0;
            if (hsToSpend.plus(hsSpare).lte(hs))
                left = mid;
            else
                right = mid;
        }
        var spentHS = compute(left);
    }
    //sort Ancients by name
    var ancientArr = [];
    for (var k in ancient)
        ancientArr.push(ancient[k]);
    ancientArr.sort(function(a, b) {
        var a1 = a.Name.toLowerCase();
        var b1 = b.Name.toLowerCase();
        if (a1 === b1) return 0;
        return (a1 > b1 ? 1 : -1);
    });
    //show data
    var tb = document.getElementById("anctable");
    tb.rows[1].cells[0].innerHTML = "Hero Souls";
    $("#manualHS").val(sciFormat(hs, 4));
    tb.rows[1].cells[2].innerHTML = sciFormat(hs.minus(spentHS), 4);
    tb.rows[1].cells[3].innerHTML = "-" + sciFormat(spentHS, 4);
    if (ancientTableShow == 0) {
        for (var j = 0; j < 26; j++) {
            $("#anctable").append("<tr style=\"display: table-row;\"><td></td><td class=\"text-right\"></td><td class=\"text-right\"></td><td><input id=\"" + j + "\" class=\"form-control rs text-right bold \" type=\"text\"></input></td><td class=\"text-right\"></td></tr>");
        }
        $(".rs").map(function() {
            $(this).focus(function() {
                $(this).val(decFormatEasyCopy(Decimal.max(0, ancientArr[this.id].OptimalLevel.minus(ancientArr[this.id].Level))));
                $(this).select();
                document.execCommand('copy');
            });
            $(this).focusout(function() {
                $(this).val(sciFormat(Decimal.max(0, ancientArr[this.id].OptimalLevel.minus(ancientArr[this.id].Level)), 4));
            });
        });
        ancientTableShow = 1;
    }
    i = 2;
    for (var k in ancientArr) {
        tb.rows[i].cells[0].innerHTML = ancientArr[k].Name;
        tb.rows[i].cells[1].innerHTML = sciFormat(ancientArr[k].Level, 4);
        tb.rows[i].cells[2].innerHTML = sciFormat(ancientArr[k].OptimalLevel, 4);
        tb.rows[i].cells[3].firstChild.value = sciFormat(Decimal.max(0, ancientArr[k].OptimalLevel.minus(ancientArr[k].Level)), 4);
        tb.rows[i].cells[4].innerHTML = sciFormat(ancientArr[k].CostToOptimal, 4);
        if ((ancientArr[k].Visible == "false") || (ancientArr[k].Level == 0) || (rawData.ancientEntrySizes[ancientArr[k]["AncientId"]] == 1))
            tb.rows[i].style.display = "none";
        else
            tb.rows[i].style.display = "table-row";
        i++;
    }
    //show the autolevel button
    $('#tab-ancient-note').slideUp(400, function() {
        $('#tab-ancient-autolevel').slideDown();
    });
}

function showBossRaidData() {
    var immortalDmg = Decimal(rawData.titanDamage);
    var ac = Decimal(rawData.autoclickers).plus(rawData.dlcAutoclickers);
    if (ac.equals(0))
        var highestBossLvl = Decimal.log(immortalDmg).plus(Decimal.log(7.2)).div(Decimal.log(2)).floor();
    else
        var highestBossLvl = Decimal.log(immortalDmg).plus(Decimal.log(ac)).plus(Decimal.log(1.8)).div(Decimal.log(2)).floor();
    $("#immortalDamage").text(sciFormat(immortalDmg, 4));
    if (ac.equals(0))
        $("#ac").text("1200 clicks/try");
    else if (ac.equals(1))
        $("#ac").text(ac.toString() + " autoclicker");
    else
        $("#ac").text(ac.toString() + " autoclickers");
    $("#highestBossLevel").text(highestBossLvl.toString());
}

function loadAndDoStuff(inputData, flag_use_next_ascension_soul) {
    loadGame(inputData);
    ascZone = getAscensionZone();
    showAscensionZone(ascZone);
    hs = getHeroSouls(flag_use_next_ascension_soul);
    showHeroSouls(hs);
    showOutsider();
    showBossRaidData();
    getCurrentRatio();
}

//ELEMENTS' BEHAVIORS
$(document).ready(function() {
    $("#useDarkTheme").change(function() {
        if ($(this).prop("checked"))
            $("#style").attr("href", "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/darkly/bootstrap.min.css");
        else
            $("#style").attr("href", "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/flatly/bootstrap.min.css");
    });

    $("#anctable").append("<tr><td></td><td class=\"text-right\"></td><td class=\"text-right\"></td><td class=\"text-right bold\"></td><td></td></tr>");

    var input = document.createElement("input");
    input.className = "text-right form-control";
    input.type = "text";
    input.placeholder = "Your desire HS (current HS if ignored)";
    input.id = "manualHS";
    var tb = document.getElementById("anctable")
    tb.rows[1].cells[0].innerHTML = "Hero Souls";
    tb.rows[1].cells[1].appendChild(input);
    
    //load save game from files
    $("#btn_file_sg").on('click', function() {
        $("#file_sg").click();
    });

    $("#file_sg").on("change", function() {
        var fr = new FileReader();
        fr.readAsText($(this).prop("files")[0]);
        fr.onload = function() {
            loadAndDoStuff(fr.result, $("#useNextAscensionSouls").prop("checked"));
        };
    });

    //load game by pasting
    $("#sg").change(function() {
        loadAndDoStuff($(this).val(), $("#useNextAscensionSouls").prop("checked"));
    });

    $("#ascensionZone").change(function() {
        if (Decimal($(this).val()).gt(0))
            ascZone = Decimal($(this).val());
        else {
            ascZone = getAscensionZone();
        }
        if (isSaveLoaded)
            optimizeAncient();
    });
    $("#manualHS").change(function() {
        if (Decimal($(this).val()).gt(0))
            hs = Decimal($(this).val());
        else
            hs = getHeroSouls($("#useNextAscensionSouls").prop("checked"));
        if (isSaveLoaded)
            optimizeAncient();
    });
    $("#useNextAscensionSouls").change(function() {
        if (isSaveLoaded) {
            hs = getHeroSouls($("#useNextAscensionSouls").prop("checked"));
            optimizeAncient();
            showASGain(additionalASShow);
        }
    });
    $(document).on("click", "input", function() {
        $(this).select();
    });

    $("#playstyleSelect").change(function() {
        if ($(this).val() == "idle") {
            $("#hybridRatioContainer").hide();
            ancient["4"].Visible = "true";
            ancient["5"].Visible = "true";
            ancient["32"].Visible = "true";
            ancient["10"].Visible = "false";
            ancient["15"].Visible = "false";
            ancient["19"].Visible = "false";
            ancient["29"].Visible = "false";
        } else if ($(this).val() == "hybrid") {
            $("#hybridRatioContainer").show();
            ancient["4"].Visible = "true";
            ancient["5"].Visible = "true";
            ancient["32"].Visible = "true";
            ancient["10"].Visible = "true";
            ancient["15"].Visible = "true";
            ancient["19"].Visible = "true";
            ancient["29"].Visible = "true";
        } else if ($(this).val() == "active") {
            $("#hybridRatioContainer").hide();
            ancient["4"].Visible = "false";
            ancient["5"].Visible = "false";
            ancient["32"].Visible = "false";
            ancient["10"].Visible = "true";
            ancient["15"].Visible = "true";
            ancient["19"].Visible = "true";
            ancient["29"].Visible = "true";
        }

        //don't show Nog if player has no autoclicker
        var total_ac = Decimal(rawData.autoclickers).plus(rawData.dlcAutoclickers);
        if (total_ac.equals(0)) {
            ancient["32"].Visible = "false";
        }

        if (isSaveLoaded)
            optimizeAncient();
    });
    $("#hybridRatio, #wep8k").on("change", function() {
        ratio = Decimal($("#hybridRatio").val());
        if (isSaveLoaded)
            optimizeAncient();
    });
    $("#flagCalculateOtherAncients").on("change", function() {
        if ($(this).prop("checked")) {
            ancient["20"].Visible = "true";
            ancient["22"].Visible = "true";
            ancient["23"].Visible = "true";
            ancient["24"].Visible = "true";
            ancient["25"].Visible = "true";
            ancient["26"].Visible = "true";
            ancient["27"].Visible = "true";
            ancient["31"].Visible = "true";
        } else {
            ancient["20"].Visible = "false";
            ancient["22"].Visible = "false";
            ancient["23"].Visible = "false";
            ancient["24"].Visible = "false";
            ancient["25"].Visible = "false";
            ancient["26"].Visible = "false";
            ancient["27"].Visible = "false";
            ancient["31"].Visible = "false";
        }
        if (isSaveLoaded)
            optimizeAncient();
    });
    $("#otherAncientsLower, #otherAncientsLowerBase").on("change", function() {
        if (isSaveLoaded)
            optimizeAncient();
    });
    $("#buttonLessAS").on("click", function() {
        if (isSaveLoaded) {
            additionalASShow = Decimal.max(additionalASShow.minus(1), 0);
            showASGain(additionalASShow);
        }
    });
    $("#buttonMoreAS").on("click", function() {
        if (isSaveLoaded) {
            additionalASShow = Decimal.min(additionalASShow.plus(1), 97);
            showASGain(additionalASShow);
        }
    });

    //autolevel modal
    $('#btnAutoLevel').on('click', function() {
        encoder.autoLevelAncient(rawSaveGame, false, rawData);
    });

    $('#btnAutoShow').on('click', function() {
        $('#modalAsk').fadeOut();        
        //encoder.autoLevelAncient(rawSaveGame, false, rawData);
        $('#modalShow').delay(400).fadeIn();
    });

    $('#modalShow textarea').on('click', function() {
        $(this).select();
    });
});
