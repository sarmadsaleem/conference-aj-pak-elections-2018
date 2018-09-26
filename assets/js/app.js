'use strict'

$.ajaxSetup({
  timeout: 5000 //Time in milliseconds
})

// global object for party legends
var parties = [
  {
    name: 'PMLN',
    color: '#006699',
    rgb: '0,102,153'
  },
  {
    name: 'PTI',
    color: '#33cccc',
    rgb: '51,204,204'
  },
  {
    name: 'PPP',
    color: '#cc0000',
    rgb: '204,0,0'
  },
  {
    name: 'MMA',
    color: '#ffcc00',
    rgb: '255,204,0'
  },
  {
    name: 'MQM',
    color: '#009900',
    rgb: '0,153,0'
  },
  {
    name: 'ANP',
    color: '#996600',
    rgb: '153,102,0'
  },
  {
    name: 'PkMAP',
    color: '#cc0066',
    rgb: '204,0,102'
  },
  {
    name: 'PMLQ',
    color: '#ffcc99',
    rgb: '255,204,153'
  },
  {
    name: 'PSP',
    color: '#cccc00',
    rgb: '204,204,0'
  },
  {
    name: 'IND.',
    color: '#ff9900',
    rgb: '255,153,0'
  },
  {
    name: 'OTHERS',
    color: '#666666',
    rgb: '102,102,102'
  }
]

// global object for election results
var electionResults = {
  '2008': [],
  '2013': [],
  '2018': []
}

// 2018
var candidateList = {
  'NA-1': {},
  'NA-1': {},
  'NA-2': {},
  'NA-3': {},
  'NA-4': {},
  'NA-5': {},
  'NA-6': {},
  'NA-7': {},
  'NA-8': {},
  'NA-9': {},
  'NA-10': {},
  'NA-11': {},
  'NA-12': {},
  'NA-13': {},
  'NA-14': {},
  'NA-15': {},
  'NA-16': {},
  'NA-17': {},
  'NA-18': {},
  'NA-19': {},
  'NA-20': {},
  'NA-21': {},
  'NA-22': {},
  'NA-23': {},
  'NA-24': {},
  'NA-25': {},
  'NA-26': {},
  'NA-27': {},
  'NA-28': {},
  'NA-29': {},
  'NA-30': {},
  'NA-31': {},
  'NA-32': {},
  'NA-33': {},
  'NA-34': {},
  'NA-35': {},
  'NA-36': {},
  'NA-37': {},
  'NA-38': {},
  'NA-39': {},
  'NA-40': {},
  'NA-41': {},
  'NA-42': {},
  'NA-43': {},
  'NA-44': {},
  'NA-45': {},
  'NA-46': {},
  'NA-47': {},
  'NA-48': {},
  'NA-49': {},
  'NA-50': {},
  'NA-51': {},
  'NA-52': {},
  'NA-53': {},
  'NA-54': {},
  'NA-55': {},
  'NA-56': {},
  'NA-57': {},
  'NA-58': {},
  'NA-59': {},
  'NA-60': {},
  'NA-61': {},
  'NA-62': {},
  'NA-63': {},
  'NA-64': {},
  'NA-65': {},
  'NA-66': {},
  'NA-67': {},
  'NA-68': {},
  'NA-69': {},
  'NA-70': {},
  'NA-71': {},
  'NA-72': {},
  'NA-73': {},
  'NA-74': {},
  'NA-75': {},
  'NA-76': {},
  'NA-77': {},
  'NA-78': {},
  'NA-79': {},
  'NA-80': {},
  'NA-81': {},
  'NA-82': {},
  'NA-83': {},
  'NA-84': {},
  'NA-85': {},
  'NA-86': {},
  'NA-87': {},
  'NA-88': {},
  'NA-89': {},
  'NA-90': {},
  'NA-91': {},
  'NA-92': {},
  'NA-93': {},
  'NA-94': {},
  'NA-95': {},
  'NA-96': {},
  'NA-97': {},
  'NA-98': {},
  'NA-99': {},
  'NA-100': {},
  'NA-101': {},
  'NA-102': {},
  'NA-103': {},
  'NA-104': {},
  'NA-105': {},
  'NA-106': {},
  'NA-107': {},
  'NA-108': {},
  'NA-109': {},
  'NA-110': {},
  'NA-111': {},
  'NA-112': {},
  'NA-113': {},
  'NA-114': {},
  'NA-115': {},
  'NA-116': {},
  'NA-117': {},
  'NA-118': {},
  'NA-119': {},
  'NA-120': {},
  'NA-121': {},
  'NA-122': {},
  'NA-123': {},
  'NA-124': {},
  'NA-125': {},
  'NA-126': {},
  'NA-127': {},
  'NA-128': {},
  'NA-129': {},
  'NA-130': {},
  'NA-131': {},
  'NA-132': {},
  'NA-133': {},
  'NA-134': {},
  'NA-135': {},
  'NA-136': {},
  'NA-137': {},
  'NA-138': {},
  'NA-139': {},
  'NA-140': {},
  'NA-141': {},
  'NA-142': {},
  'NA-143': {},
  'NA-144': {},
  'NA-145': {},
  'NA-146': {},
  'NA-147': {},
  'NA-148': {},
  'NA-149': {},
  'NA-150': {},
  'NA-151': {},
  'NA-152': {},
  'NA-153': {},
  'NA-154': {},
  'NA-155': {},
  'NA-156': {},
  'NA-157': {},
  'NA-158': {},
  'NA-159': {},
  'NA-160': {},
  'NA-161': {},
  'NA-162': {},
  'NA-163': {},
  'NA-164': {},
  'NA-165': {},
  'NA-166': {},
  'NA-167': {},
  'NA-168': {},
  'NA-169': {},
  'NA-170': {},
  'NA-171': {},
  'NA-172': {},
  'NA-173': {},
  'NA-174': {},
  'NA-175': {},
  'NA-176': {},
  'NA-177': {},
  'NA-178': {},
  'NA-179': {},
  'NA-180': {},
  'NA-181': {},
  'NA-182': {},
  'NA-183': {},
  'NA-184': {},
  'NA-185': {},
  'NA-186': {},
  'NA-187': {},
  'NA-188': {},
  'NA-189': {},
  'NA-190': {},
  'NA-191': {},
  'NA-192': {},
  'NA-193': {},
  'NA-194': {},
  'NA-195': {},
  'NA-196': {},
  'NA-197': {},
  'NA-198': {},
  'NA-199': {},
  'NA-200': {},
  'NA-201': {},
  'NA-202': {},
  'NA-203': {},
  'NA-204': {},
  'NA-205': {},
  'NA-206': {},
  'NA-207': {},
  'NA-208': {},
  'NA-209': {},
  'NA-210': {},
  'NA-211': {},
  'NA-212': {},
  'NA-213': {},
  'NA-214': {},
  'NA-215': {},
  'NA-216': {},
  'NA-217': {},
  'NA-218': {},
  'NA-219': {},
  'NA-220': {},
  'NA-221': {},
  'NA-222': {},
  'NA-223': {},
  'NA-224': {},
  'NA-225': {},
  'NA-226': {},
  'NA-227': {},
  'NA-228': {},
  'NA-229': {},
  'NA-230': {},
  'NA-231': {},
  'NA-232': {},
  'NA-233': {},
  'NA-234': {},
  'NA-235': {},
  'NA-236': {},
  'NA-237': {},
  'NA-238': {},
  'NA-239': {},
  'NA-240': {},
  'NA-241': {},
  'NA-242': {},
  'NA-243': {},
  'NA-244': {},
  'NA-245': {},
  'NA-246': {},
  'NA-247': {},
  'NA-248': {},
  'NA-249': {},
  'NA-250': {},
  'NA-251': {},
  'NA-252': {},
  'NA-253': {},
  'NA-254': {},
  'NA-255': {},
  'NA-256': {},
  'NA-257': {},
  'NA-258': {},
  'NA-259': {},
  'NA-260': {},
  'NA-261': {},
  'NA-262': {},
  'NA-263': {},
  'NA-264': {},
  'NA-265': {},
  'NA-266': {},
  'NA-267': {},
  'NA-268': {},
  'NA-269': {},
  'NA-270': {},
  'NA-271': {},
  'NA-272': {}
}

// global object for provinces
var provinces = [{ name: 'KPK' }, { name: 'TRIBAL AREAS' }, { name: 'CAPITAL TERRITORY' }, { name: 'PUNJAB' }, { name: 'SINDH' }, { name: 'BALOUCHISTAN' }]

// global object for provincial tabs markup
var provincialTabComputedMarkup = {
  KPK: '',
  'Tribal Areas': '',
  'Capital Territory': '',
  Punjab: '',
  Sindh: '',
  Balochistan: ''
}

// global object for widget sum
var widgetSum = 0
var isWidgetPopulated = false

// CMS endpoints
// conference
var host = 'https://spreadsheets.google.com/feeds/list/1Iaw1KFzV6wfZKhueX39tmEeY1mN1HLeu51oXtQglxSE'
// original
// var host = 'https://spreadsheets.google.com/feeds/list/1zOQUVU6GAWAkoMenXCs5nj6fnzzMkBIW-rQidinX8UE'
var legacyEndpoint = host + '/3/public/values?alt=json'
var currentEndpoint = host + '/1/public/values?alt=json'
var candidateListEndpoint = host + '/2/public/values?alt=json'
var widgetEndpoint = host + '/4/public/values?alt=json'

// Local fallback data
var legacyEndpointFallback = 'assets/data/legacy.json'
var currentEndpointFallback = 'assets/data/current.json'
var candidateListEndpointFallback = 'assets/data/candidateList.json'
var widgetEndpointFallback = 'assets/data/widget.json'

// fetch legacy election data
function getLegacyData(endpoint, fallback) {
  if (fallback === undefined || fallback != false) fallback = true
  $.ajax({
    dataType: 'json',
    url: endpoint
  })
    //$.getJSON(endpoint, electionResults)
    .done(function(data) {
      electionResults['2008'] = data.feed.entry.filter(function(row) {
        return row.gsx$electionyear.$t === '2008'
      })
      electionResults['2013'] = data.feed.entry.filter(function(row) {
        return row.gsx$electionyear.$t === '2013'
      })
    })
    .fail(function() {
      if (fallback) {
        console.log('Error fetching legacy election data, falling back to local data')
        getLegacyData(legacyEndpoint, false)
      } else {
        console.error('Error fetching legacy election data from all sources')
      }
    })
}

// fetch current election data
function getCurrentData(endpoint, fallback) {
  if (fallback === undefined || fallback != false) fallback = true
  // constituency data
  $.ajax({
    dataType: 'json',
    url: endpoint
  })
    //$.getJSON(endpoint, electionResults)
    .done(function(data) {
      electionResults['2018'] = data.feed.entry.filter(function(row) {
        return row.gsx$electionyear.$t === '2018'
      })
      getCandidateList(candidateListEndpointFallback)
    })
    .fail(function() {
      if (fallback) {
        console.log('Error fetching current election data, falling back to local data')
        getCurrentData(currentEndpointFallback, false)
      } else {
        console.error('Error fetching current election data from all sources')
      }
    })
}

// fetch candidate list for 2018
function getCandidateList(endpoint, fallback) {
  if (fallback === undefined || fallback != false) fallback = true
  // candidate list
  $.ajax({
    dataType: 'json',
    url: endpoint
  })
    //$.getJSON(endpoint, candidateList)
    .done(function(data) {
      $.each(data.feed.entry, function(index, row) {
        // construct candidate list
        candidateList[row.gsx$na.$t] = {
          PMLN: [row.gsx$pmln.$t],
          PTI: [row.gsx$pti.$t, row.gsx$pti_2.$t].filter(function(v) {
            return v !== ''
          }),
          PPP: [row.gsx$ppp.$t, row.gsx$ppp_2.$t].filter(function(v) {
            return v !== ''
          }),
          MMA: [row.gsx$mma.$t],
          MQM: [row.gsx$mqm.$t],
          ANP: [row.gsx$anp.$t],
          PKMAP: [row.gsx$pkmap.$t],
          PMLQ: [row.gsx$pmlq.$t],
          PSP: [row.gsx$psp.$t],
          INDEPENDENT: [
            row.gsx$independent.$t,
            row.gsx$independent_2.$t,
            row.gsx$independent_3.$t,
            row.gsx$independent_4.$t,
            row.gsx$independent_5.$t,
            row.gsx$independent_6.$t,
            row.gsx$independent_7.$t,
            row.gsx$independent_8.$t,
            row.gsx$independent_9.$t,
            row.gsx$independent_10.$t,
            row.gsx$independent_11.$t,
            row.gsx$independent_12.$t,
            row.gsx$independent_13.$t,
            row.gsx$independent_14.$t,
            row.gsx$independent_15.$t,
            row.gsx$independent_16.$t,
            row.gsx$independent_17.$t,
            row.gsx$independent_18.$t,
            row.gsx$independent_19.$t,
            row.gsx$independent_20.$t,
            row.gsx$independent_21.$t,
            row.gsx$independent_22.$t,
            row.gsx$independent_23.$t,
            row.gsx$independent_24.$t,
            row.gsx$independent_25.$t,
            row.gsx$independent_26.$t,
            row.gsx$independent_27.$t,
            row.gsx$independent_28.$t,
            row.gsx$independent_29.$t
          ].filter(function(v) {
            return v !== ''
          }),
          OTHERS: [
            row.gsx$others.$t,
            row.gsx$others_2.$t,
            row.gsx$others_3.$t,
            row.gsx$others_4.$t,
            row.gsx$others_5.$t,
            row.gsx$others_6.$t,
            row.gsx$others_7.$t,
            row.gsx$others_8.$t,
            row.gsx$others_9.$t,
            row.gsx$others_10.$t
          ].filter(function(v) {
            return v !== ''
          })
        }
      })
      hydrateCartogramContainer('2018')
    })
    .fail(function() {
      if (fallback) {
        console.log('Error fetching candidate list data, falling back to local data')
        getCandidateList(candidateListEndpoint, false)
      } else {
        console.error('Error fetching candidate list data from all sources')
      }
    })
}

// hydrated cartogram container according to year
function hydrateCartogramContainer(year) {
  $.ajax({
    url: 'assets/img/carto_map_' + year + '.svg',
    type: 'GET',
    dataType: 'html'
  }).done(function(data) {
    $('.carto-view__map-container').html(data)
    colorCartogram(year)
    populateProvincialTabs(year)
    hexClick()
    provincialTabSearch()
    toggleSpinner('#main-loader', '#main-wrapper')
    recalculateWidgetStyles(year)
  })
}

// set text for map selection button
function initMapSelector() {
  var el = $('#map-selector')
  var geoView = $('#geo-map-view')
  geoView.hasClass('d-none') ? $(el).text('VIEW GEOGRAPHIC MAP') : $(el).text('VIEW POLITICAL CARTOGRAM')
}

// handle map selection
function mapSelector() {
  initMapSelector()
  var el = $('#map-selector, #map-selector-mobile')
  var cartoView = $('#carto-map-view')
  var geoView = $('#geo-map-view')

  el.on('click', function() {
    var year = $('#year-selector .active').attr('data-id')
    cartoView.toggleClass('d-none')
    geoView.toggleClass('d-none')
    // if geo map view is active, load according to selected year on click
    if (!geoView.hasClass('d-none')) {
      $('.geo-view__map-image').attr('src', 'assets/img/geo_map_' + year + '.svg')
    }

    if (!cartoView.hasClass('d-none')) {
      hydrateCartogramContainer(year)
    }

    initMapSelector()
    $('#mobile-navigation-modal').modal('hide')
  })
}

// handle year selection
function yearSelector() {
  var el = $('#year-selector > button, #year-selector-mobile > button')
  el.on('click', function() {
    var year = $(this).attr('data-id')
    el.removeClass('active')
    $('#year-selector > button[data-id="' + year + '"], #year-selector-mobile > button[data-id="' + year + '"]').toggleClass('active')
    $('#mobile-navigation-modal').modal('hide')
    $('.headline span').text(year)

    // if geo map view is active, update it
    if (!$('#geo-map-view').hasClass('d-none')) {
      $('.geo-view__map-image')
        .removeClass('fadein')
        .delay(100)
        .queue(function() {
          $(this)
            .addClass('fadein')
            .attr('src', 'assets/img/geo_map_' + year + '.svg')
            .dequeue()
        })
    }

    if (!$('#carto-map-view').hasClass('d-none')) {
      $('#carto-map-view')
        .removeClass('fadein')
        .delay(100)
        .queue(function() {
          $(this)
            .addClass('fadein')
            .dequeue()

          $('.widget[data-id="' + year + '"]').removeClass('d-none')
          $('.widget:not([data-id="' + year + '"])').addClass('d-none')
          hydrateCartogramContainer(year)
        })
    }
  })
}

// initialize navigation
function initNavigation() {
  mapSelector()
  yearSelector()
}

// populate party legends
function initPartyLegends() {
  var el = $('#party-legends > .party-legends__list')
  var elMobile = $('#party-legends-mobile > .party-legends__list')
  $.each(parties, function(index, party) {
    var listItem =
      '<li class="party-legends__list-item"><div class="party-legends__list-item-image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.96 64.05"><title>Asset 3</title><g id="party-legend" data-name="Layer 2"><polygon style="fill:' +
      party.color +
      '" points="18.49 64.05 55.47 64.05 73.96 32.03 55.47 0 18.49 0 0 32.03 18.49 64.05"/></g></svg></div><div class="party-legends__list-item-name">' +
      party.name +
      '</div></li>'
    el.append(listItem)
    elMobile.append(listItem)
  })
}

// get party color based on input
function getPartyColor(input, mode) {
  if (mode === 'undefined' || mode != 'rgb') mode = 'hex'
  input = input.toUpperCase().replace(/-/g, '')

  if (input === '') return '#ccc'

  // exceptions: PPPP = PPP, PML = PMLQ, IND = IND.
  // make sure index is same in both arrays
  var exceptionTargets = ['PPPP', 'PML', 'IND', 'INDEPENDENT', 'MQMP', 'PMAP']
  var exceptionResults = ['PPP', 'PMLQ', 'IND.', 'IND.', 'MQM', 'PkMAP']

  var toBeTransformed = $.inArray(input, exceptionTargets)
  if (toBeTransformed != -1) input = exceptionResults[toBeTransformed]

  var found = parties.filter(function(party) {
    return party.name === input
  })
  if (found.length) {
    return mode === 'hex' ? found[0].color : found[0].rgb
  } else {
    return '#666666'
  }
}

// color cartogram based on year
function colorCartogram(year) {
  var comuptedStyles =
    '.cls-1,.cls-12,.cls-35{fill:#999}.cls-2,.cls-22,.cls-28,.cls-39,.cls-40{fill:none;stroke-miterlimit:10}.cls-2{stroke:#f90;stroke-width:4px}.cls-3{font-size:108.64px}.cls-10,.cls-3{fill:#333}.cls-10,.cls-13,.cls-16,.cls-23,.cls-29,.cls-3,.cls-34{font-family:OpenSans-Light,Open Sans}.cls-4{letter-spacing:-.04em}.cls-5{font-size:35px;font-family:OpenSans-Bold,Open Sans}.cls-11,.cls-12,.cls-15,.cls-33,.cls-35,.cls-5{font-weight:700}.cls-6{letter-spacing:.02em}.cls-7{letter-spacing:-.04em}.cls-8{letter-spacing:-.02em}.cls-9{letter-spacing:.02em}.cls-10{font-size:39.74px;letter-spacing:-.04em}.cls-11,.cls-33{font-size:31.33px;fill:#f90}.cls-11,.cls-12,.cls-33,.cls-35{font-family:OpenSans-ExtraBold,Open Sans}.cls-11{letter-spacing:-.02em}.cls-12,.cls-13,.cls-17{letter-spacing:-.04em}.cls-12{font-size:30.64px}.cls-13,.cls-16{font-size:71.58px}.cls-13,.cls-16,.cls-23,.cls-29,.cls-34{fill:#525252}.cls-14,.cls-16{letter-spacing:-.14em}.cls-15{font-size:46.3px;font-family:OpenSans-SemiBold,Open Sans;letter-spacing:-.04em}.cls-18,.cls-27,.cls-37{font-size:56.2px;fill:#666;font-family:OpenSans-Regular,Open Sans}.cls-18,.cls-38{letter-spacing:-.06em}.cls-19{letter-spacing:-.14em}.cls-20{letter-spacing:-.1em}.cls-21{letter-spacing:-.16em}.cls-22,.cls-28,.cls-39{stroke:#525252}.cls-22{stroke-width:1.02px}.cls-23,.cls-29,.cls-34{font-size:69.74px}.cls-23,.cls-31{letter-spacing:-.14em}.cls-24,.cls-34{letter-spacing:-.04em}.cls-25{letter-spacing:-.14em}.cls-26,.cls-32{font-size:32.31px}.cls-26{letter-spacing:-.04em}.cls-27{letter-spacing:-.06em}.cls-28{stroke-width:.92px}.cls-29{letter-spacing:-.2em}.cls-30{letter-spacing:-.1em}.cls-32{letter-spacing:-.04em}.cls-33{letter-spacing:-.02em}.cls-35{font-size:29.74px;letter-spacing:-.04em}.cls-36{letter-spacing:-.12em}.cls-37{letter-spacing:-.16em}.cls-39{stroke-width:.86px}.cls-40{stroke:#333;stroke-width:.67px}'
  $.each(electionResults[year], function(index, row) {
    var constitutency = row.gsx$constituency.$t
    var color = '#ccc'
    if (row.gsx$candidatename.$t && row.gsx$party.$t && row.gsx$iswinner.$t) color = getPartyColor(row.gsx$party.$t)
    comuptedStyles += 'g[id="' + constitutency + '"]{' + 'fill:' + color + ';} '
  })
  $('#carto-map svg defs style').text(comuptedStyles)
  $('#carto-map svg g polygon').removeClass('cls-1')

  $('#carto-map svg g').each(function() {
    var dataName = $(this).attr('id')
    // set tool tip data for each consituency
    if (
      dataName != 'province' &&
      dataName != 'MAP_BOUNDRY' &&
      dataName != 'TEXT_INFO' &&
      dataName != 'KPK' &&
      dataName != 'PUNJAB' &&
      dataName != 'SINDH' &&
      dataName != 'BALOCHISTAN' &&
      dataName != 'CAPITAL' &&
      dataName != 'FATA'
    ) {
      $(this).attr({
        'data-toggle': 'tooltip',
        'data-placement': 'top',
        title: dataName
      })
    }
  })
  $('[data-toggle="tooltip"]').tooltip()
}

// generate card markup based on row input
function getCardTemplate(row) {
  var markup = ''
  var overrideFontSize = row.gsx$constituencyname.$t.length > 20 ? 'style="font-size:1rem;"' : ''
  var registeredVotersFormatted = row.gsx$registeredvoters.$t === '0' || row.gsx$registeredvoters.$t === '' ? 'N/A' : parseInt(row.gsx$registeredvoters.$t).toLocaleString('en')
  if (row.gsx$electionyear.$t === '2018') {
    var imageMarkup = '<img class="constituency-card__map" src="assets/img/constituency_maps/map-not-available.svg"/>'
    var male = row.gsx$male.$t === '0' || row.gsx$male.$t === '' ? 'N/A' : parseInt(row.gsx$male.$t).toLocaleString('en')
    var female = row.gsx$female.$t === '0' || row.gsx$female.$t === '' ? 'N/A' : parseInt(row.gsx$female.$t).toLocaleString('en')
    if (!(row.gsx$constituency.$t === 'NA-51' || row.gsx$constituency.$t === 'NA-87' || row.gsx$constituency.$t === 'NA-268')) {
      imageMarkup = '<img class="constituency-card__map" data-src="assets/img/constituency_maps/' + row.gsx$constituency.$t + '.svg" />'
    }
    var candidateListMarkup = ''
    if (row.gsx$iswinner.$t === 'TRUE' && (row.gsx$party.$t != '' || row.gsx$party.$t != '#N/A')) {
      var turnoutMarkup = row.gsx$turnout.$t === '0.00%' ? '' : '<div class="constituency-card__label"><div class="constituency-card__value">' + row.gsx$turnout.$t + '</div>TURNOUT</div>'
      var votesPolledMarkup = row.gsx$polledvotes.$t === '' ? '' : '<div class="constituency-card__label"><div class="constituency-card__value">' + row.gsx$polledvotes.$t + '</div>VOTES POLLED</div>'
      var votesMarkup = row.gsx$votes.$t === '' ? '' : '<div class="constituency-card__label"><div class="constituency-card__value">' + row.gsx$votes.$t + '</div>VOTES</div>'

      candidateListMarkup =
        '<div class="constituency-card__candidate constituency-card__winner"><div class="constituency-card__candidate-party"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.96 64.05"><title>Asset 3</title><g id="party-legend" data-name="Layer 2"><polygon style="fill:' +
        getPartyColor(row.gsx$party.$t) +
        '" points="18.49 64.05 55.47 64.05 73.96 32.03 55.47 0 18.49 0 0 32.03 18.49 64.05"></polygon></g></svg></div><div class="constituency-card__candidate-name" data-candidate-party="' +
        row.gsx$party.$t +
        '" style="background:rgba(' +
        getPartyColor(row.gsx$party.$t, 'rgb') +
        ',0.3)">' +
        row.gsx$candidatename.$t.toLowerCase() +
        '</div></div><div class="constituency-card__winner-label">WINNER</div>' +
        '<div class="constituency-card__generic-values-container">' +
        turnoutMarkup +
        votesPolledMarkup +
        votesMarkup +
        '</div>'
    } else {
      candidateListMarkup = getCandidateListMarkup(row.gsx$constituency.$t)
    }

    markup =
      '<div class="card constituency-card" data-id="' +
      row.gsx$constituency.$t +
      '" style="box-shadow: 0 -7px 0 ' +
      getPartyColor(row.gsx$party.$t) +
      ';"><div class="card-body"><div class="row"><div class="col"><h2 class="constituency-card__id">' +
      row.gsx$constituency.$t +
      '</h2><h3 class="constituency-card__name" ' +
      overrideFontSize +
      '>' +
      row.gsx$constituencyname.$t +
      '</h3><div class="constituency-card__reg-voters">' +
      registeredVotersFormatted +
      ' <span>VOTERS</span></div><div class="constituency-card__gender-container"><div class="constituency-card__gender">' +
      male +
      ' <span>MALE</span></div><div class="constituency-card__gender">' +
      female +
      ' <span>FEMALE</span></div></div><div class="constituency-card__polling-stations">POLLING STATIONS: ' +
      row.gsx$pollingstations.$t +
      '</div></div><div class="col">' +
      imageMarkup +
      '</div><div class="col-md"><div class="constituency-card__candidate-list">' +
      candidateListMarkup +
      '</div></div></div></div></div>'
  } else {
    markup =
      '<div class="card constituency-card" style="box-shadow: 0 -7px 0 ' +
      getPartyColor(row.gsx$party.$t) +
      ';"><div class="card-body"><div class="row"><div class="col"><h2 class="constituency-card__id">' +
      row.gsx$constituency.$t +
      '</h2><h3 class="constituency-card__name" ' +
      overrideFontSize +
      '>' +
      row.gsx$constituencyname.$t +
      '</h3><div class="constituency-card__reg-voters">' +
      registeredVotersFormatted +
      ' <span>VOTERS<span></div></div><div class="col"><div class="constituency-card__candidate constituency-card__winner"><div class="constituency-card__candidate-party"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.96 64.05"><title>Asset 3</title><g id="party-legend" data-name="Layer 2"><polygon style="fill:' +
      getPartyColor(row.gsx$party.$t) +
      '" points="18.49 64.05 55.47 64.05 73.96 32.03 55.47 0 18.49 0 0 32.03 18.49 64.05"></polygon></g></svg></div><div class="constituency-card__candidate-name" data-candidate-party="' +
      row.gsx$party.$t +
      '" style="background:rgba(' +
      getPartyColor(row.gsx$party.$t, 'rgb') +
      ',0.3)">' +
      row.gsx$candidatename.$t.toLowerCase() +
      '</div></div><div class="constituency-card__winner-label">WINNER</div></div></div></div></div>'
  }

  return markup
}

// construct candidate list markup based on constituency for 2018
function getCandidateListMarkup(constituency) {
  var markup = ''
  $.each(candidateList[constituency], function(index, party) {
    if ((party.length === 1 && party[0] === '') || party.length === 0) {
    } else if (party.length === 1) {
      markup +=
        '<div class="constituency-card__candidate"><div class="constituency-card__candidate-party"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.96 64.05"><title>Asset 3</title><g id="party-legend" data-name="Layer 2"><polygon style="fill:' +
        getPartyColor(index) +
        '" points="18.49 64.05 55.47 64.05 73.96 32.03 55.47 0 18.49 0 0 32.03 18.49 64.05"></polygon></g></svg></div><div class="constituency-card__candidate-name" data-candidate-party="' +
        index +
        '" style="background:rgba(' +
        getPartyColor(index, 'rgb') +
        ',0.3)">' +
        party[0].toLowerCase() +
        '</div></div>'
    } else if (party.length > 1) {
      $.each(party, function(i, candidate) {
        markup +=
          '<div class="constituency-card__candidate"><div class="constituency-card__candidate-party"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.96 64.05"><title>Asset 3</title><g id="party-legend" data-name="Layer 2"><polygon style="fill:' +
          getPartyColor(index) +
          '" points="18.49 64.05 55.47 64.05 73.96 32.03 55.47 0 18.49 0 0 32.03 18.49 64.05"></polygon></g></svg></div><div class="constituency-card__candidate-name" data-candidate-party="' +
          index +
          '" style="background:rgba(' +
          getPartyColor(index, 'rgb') +
          ',0.3)">' +
          candidate.toLowerCase() +
          '</div></div>'
      })
    }
  })

  return markup
}

// populate provincial tabs based on year
function populateProvincialTabs(year) {
  // reset
  provincialTabComputedMarkup = {
    KPK: '',
    'Tribal Areas': '',
    'Capital Territory': '',
    Punjab: '',
    Sindh: '',
    Balochistan: ''
  }
  $.each(electionResults[year], function(index, row) {
    var color = '#999'

    if (row.gsx$constituency.$t) {
      color = getPartyColor(row.gsx$party.$t)
      switch (row.gsx$province.$t) {
        case 'KPK':
          provincialTabComputedMarkup['KPK'] += getCardTemplate(row)
          break

        case 'Tribal Areas':
          provincialTabComputedMarkup['Tribal Areas'] += getCardTemplate(row)
          break

        case 'Capital Territory':
          provincialTabComputedMarkup['Capital Territory'] += getCardTemplate(row)
          break

        case 'Punjab':
          provincialTabComputedMarkup['Punjab'] += getCardTemplate(row)
          break

        case 'Sindh':
          provincialTabComputedMarkup['Sindh'] += getCardTemplate(row)
          break

        case 'Balochistan':
          provincialTabComputedMarkup['Balochistan'] += getCardTemplate(row)
          break

        default:
          break
      }
    }
  })

  $('#provincial-tabs a[data-toggle="tab"]').on('click', function() {
    var provinceId = $(this).attr('data-id')
    var provinceName = $(this).attr('data-province-name')
    var tab = $('.provincial-tabs__content #' + provinceId + ' .provincial-tab-content')
    var selectedYear = $('#year-selector .active').attr('data-id')
    var cachedYear = tab.attr('data-cache-for')
    if (!(selectedYear === cachedYear)) {
      tab.html(provincialTabComputedMarkup[provinceName])
      // avoid dom update on every click for same year
      tab.attr('data-cache-for', year)
      $('.constituency-card__map').lazy()
    }
  })

  $('#provincial-tabs a[data-id="nav-kpk"]').trigger('click')
}

// handle hexagon click
function hexClick() {
  $('#carto-map svg g').on('click', function() {
    var el = $(this)
    if (el.attr('data-name') === 'province') {
      var provinceId = el
        .attr('id')
        .replace(/\s+/g, '-')
        .toLowerCase()

      if (provinceId === 'fata') provinceId = 'tribal-areas'
      if (provinceId === 'capital') provinceId = 'capital-territory'

      var targetTab = $('#nav-' + provinceId + '-tab')

      targetTab.tab('show')
      $('#provincial-tabs a[data-id="nav-' + provinceId + '"]').trigger('click')

      // animate to tab on province click
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: targetTab.offset().top - 80
          },
          500
        )
    }
  })
}

// handle provincial tab search
function provincialTabSearch() {
  $('.search-box').on('input propertychange paste', function() {
    var input = $(this)
      .val()
      .trim()
      .toUpperCase()
    var parent = ''
    if (input.length > 0 && /^[a-z0-9-]+$/i.test(input)) {
      parent = $(this)
        .parents('.tab-pane')
        .attr('id')
      $('#' + parent + ' .provincial-tab-content .constituency-card').addClass('d-none')
      var elements = $('#' + parent + ' .provincial-tab-content .constituency-card[data-id*=' + input + ']').removeClass('d-none')
    }
    if (input.length === 0) {
      parent = $(this)
        .parents('.tab-pane')
        .attr('id')
      $('#' + parent + ' .provincial-tab-content .constituency-card').removeClass('d-none')
    }
  })
}

// hide spinner and show content
function toggleSpinner(spinnerSelector, contentSelector) {
  $(spinnerSelector).addClass('d-none')
  $(contentSelector).removeClass('d-none')
}

// populate widget
function populateWidget(endpoint, fallback) {
  if (fallback === undefined || fallback != false) fallback = true
  $.ajax({
    dataType: 'json',
    url: endpoint
  })
    //$.getJSON(endpoint)
    .done(function(data) {
      var response = data.feed.entry[0]
      var winner = response.gsx$winner.$t
      $('.live-widget #PPP .seats-won').text(response.gsx$ppp.$t)
      $('.live-widget #PTI .seats-won').text(response.gsx$pti.$t)
      $('.live-widget #PMLN .seats-won').text(response.gsx$pmln.$t)
      $('.live-widget #OTHERS .seats-won').text(response.gsx$others.$t)

      widgetSum = parseInt(response.gsx$ppp.$t) + parseInt(response.gsx$pti.$t) + parseInt(response.gsx$pmln.$t) + parseInt(response.gsx$others.$t)

      if (widgetSum > 0) {
        $('.live-widget').removeClass('d-none')
      }

      if ($('#' + winner).length === 1) {
        $('.live-widget .box:not(#' + winner + ')').css('opacity', '0.5')
      }

      isWidgetPopulated = true
    })
    .fail(function() {
      if (fallback) {
        console.log('Error fetching widget data, falling back to local data')
        populateWidget(widgetEndpointFallback, false)
      } else {
        console.error('Error fetching widget data from all sources')
      }
    })
}

// recalculate styles for widget
function recalculateWidgetStyles(year) {
  if (isWidgetPopulated) {
    $('.widget').addClass('d-none')
    $('.widget[data-id="' + year + '"]').removeClass('d-none')
    if (parseInt(widgetSum) > 0 && year === '2018') $('.live-widget').removeClass('d-none')
    else $('.live-widget').addClass('d-none')
  }
}

// after dom is ready
$(document).ready(function() {
  $('#year-selector button[data-id="2018"], #year-selector-mobile button[data-id="2018"]').toggleClass('active')
  initNavigation()
  initPartyLegends()
  getCurrentData(currentEndpoint)
  getLegacyData(legacyEndpointFallback)
  populateWidget(widgetEndpoint)
})

// fallback
if (!Array.prototype.filter) {
  Array.prototype.filter = function(func, thisArg) {
    if (!((typeof func === 'Function' || typeof func === 'function') && this)) throw new TypeError()

    var len = this.length >>> 0,
      res = new Array(len),
      // preallocate array
      t = this,
      c = 0,
      i = -1
    if (thisArg === undefined) {
      while (++i !== len) {
        // checks to see if the key was set
        if (i in this) {
          if (func(t[i], i, t)) {
            res[c++] = t[i]
          }
        }
      }
    } else {
      while (++i !== len) {
        // checks to see if the key was set
        if (i in this) {
          if (func.call(thisArg, t[i], i, t)) {
            res[c++] = t[i]
          }
        }
      }
    }

    res.length = c // shrink down array to proper size
    return res
  }
}
