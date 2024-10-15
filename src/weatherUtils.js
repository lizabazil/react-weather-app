
const weatherCodeDescriptions = {
    0: 'Cloud development not observed or not observable',
    1: 'Cloud generally dissolving or becoming less developed',
    2: 'State of sky on the whole unchanged',
    3: 'Clouds generally forming or developing',
    4: 'Visibility reduced by smoke, e.g. veldt or forest fires, industrial smoke or \n' +
        'volcanic ashes',
    5: 'Haze',
    6: 'Widespread dust in suspension in the air, not raised by wind at or near the \n' +
        '     station at the time of observation',
    7: 'Dust or sand raised by wind at or near the station at the time of \n' +
        '     observation, but not well-developed dust whirl(s) or sand whirl(s), \n' +
        '     and no duststorm or sandstorm seen; or, in the case of ships, blowing \n' +
        '     spray at the station',
    8: 'Well-developed dust or sand whirl(s) seen at or near the station during the \n' +
        '     preceding hour or at the time of observation, but no dust storm or sandstorm ',
    9: 'Duststorm or sandstorm within sight at the time of observation, or at the \n' +
        '     station during the preceding hour',
    10: 'Mist',
    11: 'Patches of shallow fog or ice fog at the station, whether on land or sea not \n' +
        '     deeper than about 2 metres on land or 10 metres at sea ',
    12: 'More or less continuous shallow fog or ice fog at the station, whether on \n' +
        '     land or sea, not deeper than about 2m/land or 10m/sea ',
    13: 'Lightning visible, no thunder heard ',
    14: 'Precipitation within sight, not reaching the ground or the surface of the \n' +
        '     sea',
    15: 'Precipitation within sight, reaching the ground or the surface of the sea, \n' +
        '     but distant, i.e. > 5 km from the station ',
    16: 'Precipitation within sight, reaching the ground or the surface of the sea, \n' +
        '     near to, but not at the station ',
    17: 'Thunderstorm, but no precipitation at the time of observation  ',
    18: 'Squalls at or within sight of the station during the preceding hour or at \n' +
        '     the time of observation',
    19: 'Squalls at or within sight of the station during the preceding hour or at \n' +
        '     the time of observation',
    20: 'Squalls at or within sight of the station during the preceding hour or at \n' +
        '     the time of observation',
    21: 'Rain (not freezing), not falling as showers, during the preceding hour but \n' +
        '     not at the time of observation',
    22: 'Snow, not falling as showers, during the preceding hour but not at the \n' +
        '     time of observation',
    23: 'Rain and snow or ice pellets, not falling as showers; during the preceding \n' +
        '     hour but not at the time of observation',
    24: 'Freezing drizzle or freezing rain; during the preceding hour but not at the \n' +
        '     time of observation',
    25: 'Shower(s) of rain during the preceding hour but not at the time of \n' +
        '     observation',
    26: 'Shower(s) of rain during the preceding hour but not at the time of \n' +
        '     observation',
    27: 'Shower(s) of hail, or of rain and hail during the preceding hour but not at \n' +
        '     the time of observation ',
    28: 'Fog or ice fog during the preceding hour but not at the time of observation',
    29: 'Thunderstorm (with or without precipitation) during the preceding hour but \n' +
        '     not at the time of observation',
    30: 'Slight or moderate duststorm or sandstorm - has decreased during the \n' +
        '     preceding hour',
    31: 'Slight or moderate duststorm or sandstorm - no appreciable change during \n' +
        '     the preceding hour',
    32: ' Slight or moderate duststorm or sandstorm - has begun or has increased \n' +
        '     during the preceding hour',
    33: 'Severe duststorm or sandstorm - has decreased during the preceding hour',
    34: 'Severe duststorm or sandstorm - no appreciable change during the preceding \n' +
        '     hour',
    35: 'Severe duststorm or sandstorm - has begun or has increased during the \n' +
        '     preceding hour ',
    36: 'Slight/moderate drifting snow - generally low (below eye level)',
    37: 'Heavy drifting snow - generally low (below eye level)',
    38: 'Slight/moderate blowing snow - generally high (above eye level)',
    39: 'Heavy blowing snow - generally high (above eye level)',
    40: 'Fog or ice fog at a a distance at the time of observation, but not at \n' +
        '     station during the preceding hour, the fog or ice fog extending to a \n' +
        '     level above that of  the observer',
    41: 'Fog or ice fog in patches',
    42: 'Fog or ice fog in patches ',
    43: 'Fog/ice fog, sky invisible, has become thinner during the preceding hour',
    44: 'Fog or ice fog, sky visible, no appreciable change during the past hour',
    45: 'Fog or ice fog, sky invisible, no appreciable change during the preceding \n' +
        '     hour',
    46: 'Fog or ice fog, sky visible, has begun or has become thicker during \n' +
        '     preceding hour',
    47: 'Fog or ice fog, sky invisible, has begun or has become thicker during the \n' +
        '     preceding hour',
    48: 'Fog, depositing rime, sky visible ',
    49: 'Fog, depositing rime, sky invisible',
    50: 'Drizzle, not freezing, intermittent, slight at time of ob.',
    51: "Drizzle, not freezing, continuous, slight at time of ob.",
    52: "Drizzle, not freezing, intermittent, moderate at time of ob.",
    53: "Drizzle, not freezing, continuous, moderate at time of ob.",
    54: "Drizzle, not freezing, intermittent, heavy at time of ob.",
    55: "Drizzle, not freezing, continuous, heavy at time of ob.",
    56: "Drizzle, freezing, slight",
    57: "Drizzle, freezing, moderate or heavy (dense)",
    58: "Rain and drizzle, slight",
    59: "Rain and drizzle, moderate or heavy",
    60: "Rain, not freezing, intermittent, slight at time of ob.",
    61: "Rain, not freezing, continuous, slight at time of ob.",
    62: "Rain, not freezing, intermittent, moderate at time of ob.",
    63: "Rain, not freezing, continuous, moderate at time of ob.",
    64: "Rain, not freezing, intermittent, heavy at time of ob.",
    65: "Rain, not freezing, continuous, heavy at time of ob.",
    66: "Rain, freezing, slight",
    67: "Rain, freezing, moderate or heavy",
    68: "Rain or drizzle and snow, slight",
    69: "Rain or drizzle and snow, moderate or heavy",
    70: "Intermittent fall of snowflakes, slight at time of ob.",
    71: "Continuous fall of snowflakes, slight at time of ob.",
    72: "Intermittent fall of snowflakes, moderate at time of ob.",
    73: "Continuous fall of snowflakes, moderate at time of ob.",
    74: "Intermittent fall of snowflakes, heavy at time of ob.",
    75: "Continuous fall of snowflakes, heavy at time of ob.",
    76: "Diamond dust (with or without fog)",
    77: "Snow grains (with or without fog)",
    78: "Isolated star-like snow crystals (with or without fog)",
    79: "Ice pellets",
    80: "Rain shower(s), slight",
    81: "Rain shower(s), moderate or heavy",
    82: "Rain shower(s), violent",
    83: "Shower(s) of rain and snow, slight",
    84: "Shower(s) of rain and snow, moderate or heavy",
    85: "Snow shower(s), slight",
    86: "Snow shower(s), moderate or heavy",
    87: "Shower(s) of snow pellets or small hail, with or without rain or rain and snow mixed - slight",
    88: "Shower(s) of snow pellets or small hail, with or without rain or rain and snow mixed - moderate or heavy",
    89: "Shower(s) of hail, with or without rain or rain and snow mixed, not associated with thunder - slight",
    90: "Shower(s) of hail, with or without rain or rain and snow mixed, not associated with thunder - moderate or heavy",
    91: "Slight rain at time of observation - Thunderstorm during the preceding hour but not at time of observation",
    92: "Moderate or heavy rain at time of observation - Thunderstorm during the preceding hour but not at time of observation",
    93: "Slight snow, or rain and snow mixed or hail at time of observation - Thunderstorm during the preceding hour but not at time of observation",
    94: "Moderate or heavy snow, or rain and snow mixed or hail at time of observation - Thunderstorm during the preceding hour but not at time of observation",
    95: "Thunderstorm, slight or moderate, without hail, but with rain and/or snow at time of observation",
    96: "Thunderstorm, slight or moderate, with hail at time of ob.",
    97: "Thunderstorm, heavy, without hail, but with rain and/or snow at time of observation",
    98: "Thunderstorm combined with dust/sandstorm at time of observation",
    99: "Thunderstorm, heavy with hail at time of observation"
    }

    export function getWeatherUniCode(weatherCode) {
    if (weatherCode >= 0 && weatherCode <= 2) return '☀'
        if (weatherCode >= 3 && weatherCode <= 12) return '🌤'
        if (weatherCode >= 13 && weatherCode <= 20) return '🌦'
        if (weatherCode >= 21 && weatherCode <= 36) return '🌧'
        if (weatherCode >= 37 && weatherCode <= 39) return '🌨'
        if (weatherCode >= 50 && weatherCode <= 65) return '🌧'
        if (weatherCode >= 66 && weatherCode <= 75) return '🌨'
        if (weatherCode >= 76 && weatherCode <= 89) return '🌧'
        if (weatherCode >= 90 && weatherCode <= 99) return '⛈'


    }

    export function getWeatherDescription(weatherCode) {
    return weatherCodeDescriptions[weatherCode]
    }