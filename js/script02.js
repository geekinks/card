// cards Array of objects
// Array of cards
const cards = [
  {
    hit: 'for School',
    title: 'Eazy Adaptations',
    subtitle: 'Transform your Students into tech leaders. works offline. proven Curriculum. measurable outcomes.',
    features: [
      'Works Without Internet',
      'Ready-to-use Curriculum',
      'Teacher training included',
      'Student progress tracking',
    ],
    cta: 'Request a Demo',
  },
  {
    hit: 'for School',
    title: 'Eazy Adaptations',
    subtitle: 'Transform your Students into tech leaders. works offline. proven Curriculum. measurable outcomes.',
    features: [
      'Works Without Internet',
      'Ready-to-use Curriculum',
      'Teacher training included',
      'Student progress tracking',
    ],
    cta: 'Request a Demo',
  },
  {
    hit: 'for School',
    title: 'Eazy Adaptations',
    subtitle: 'Transform your Students into tech leaders. works offline. proven Curriculum. measurable outcomes.',
    features: [
      'Works Without Internet',
      'Ready-to-use Curriculum',
      'Teacher training included',
      'Student progress tracking',
    ],
    cta: 'Request a Demo',
  },
];


// document.getElementById('sch01').innerText = card.hit   
// document.getElementById('sch01').style.color = '#ff5733'
// document.getElementById('eazy').innerText = card.title
// document.getElementById('feat1').innerText = card.features[0]
// document.getElementById('feat2').innerText = card.features[1]
// document.getElementById('feat3').innerText = card.features[2]
// document.getElementById('feat4').innerText = card.features[3]
// document.getElementById('discr').innerText = card.subtitle
// document.getElementById('cta').innerText = card.cta

// using cards array of objects
// card 0
document.getElementById('sch01').innerText = cards[0].hit
document.getElementById('sch01').style.color = '#ff5733'
document.getElementById('eazy').innerText = cards[0].title
document.getElementById('feat1').innerText = cards[0].features[0]
document.getElementById('feat2').innerText = cards[0].features[1]
document.getElementById('feat3').innerText = cards[0].features[2]
document.getElementById('feat4').innerText = cards[0].features[3]
document.getElementById('discr').innerText = cards[0].subtitle
document.getElementById('cta').innerText = cards[0].cta

// card 2
document.getElementById('sch02').innerText = cards[1].hit
document.getElementById('sch02').style.color = '#ff5733'
document.getElementById('eazy02').innerText = cards[1].title
document.getElementById('feat02-1').innerText = cards[1].features[0]
document.getElementById('feat02-2').innerText = cards[1].features[1]
document.getElementById('feat02-3').innerText = cards[1].features[2]
document.getElementById('feat02-4').innerText = cards[1].features[3]
document.getElementById('discr02').innerText = cards[1].subtitle
document.getElementById('cta02').innerText = cards[1].cta

// card 3
document.getElementById('sch03').innerText = cards[2].hit
document.getElementById('sch03').style.color = '#ff5733'    
document.getElementById('eazy03').innerText = cards[2].title
document.getElementById('feat03-1').innerText = cards[2].features[0]
document.getElementById('feat03-2').innerText = cards[2].features[1]
document.getElementById('feat03-3').innerText = cards[2].features[2]
document.getElementById('feat03-4').innerText = cards[2].features[3]
document.getElementById('discr03').innerText = cards[2].subtitle
document.getElementById('cta03').innerText = cards[2].cta


