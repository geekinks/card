// var hit = 'for School'
// let title = 'Eazy Adaptations'
// const subtitle = 'Transform your Students into tech leaders. works offline. proven Curriculum. measurable outcomes.'
// let features = [
//    'Works Without Internet',
//    'Ready-to-use Curriculum',
//    'Teacher training included',
//    'Student progress tracking',
// ]
// const cta = 'Request a Demo'

// object card
const card = {
    hit: 'for School',
    title: 'Eazy Adaptations',
    subtitle: 'Transform your Students into tech leaders. works offline. proven Curriculum. measurable outcomes.',
    features: [
        'Works Without Internet',
        'Ready-to-use Curriculum',
        'Teacher training included',
        'Student progress tracking',
    ],
    cta: 'Request a Demo'
}




// document.getElementsByClassName('sch')[0].innerText = 'for Student'
// document.getElementsByClassName('sch')[0].style.color = '#ff5733'
// document.getElementsByClassName('sch')[1].innerText = hit   
// document.getElementsByClassName('sch')[1].style.color = '#ff5733'
// document.getElementsByClassName('sch')[2].innerText = 'for Business'
// document.getElementsByClassName('sch')[2].style.color = '#ff5733'
// document.getElementById('eazy').innerText = title
// document.getElementById('feat1').innerText = features[0]
// document.getElementById('feat2').innerText = features[1]
// document.getElementById('feat3').innerText = features[2]
// document.getElementById('feat4').innerText = features[3]
// document.getElementById('discr').innerText = subtitle
// document.getElementById('cta').innerText = cta

// using object card
document.getElementById('sch01').innerText = card.hit   
document.getElementById('sch01').style.color = '#ff5733'
document.getElementById('eazy').innerText = card.title
document.getElementById('feat1').innerText = card.features[0]
document.getElementById('feat2').innerText = card.features[1]
document.getElementById('feat3').innerText = card.features[2]
document.getElementById('feat4').innerText = card.features[3]
document.getElementById('discr').innerText = card.subtitle
document.getElementById('cta').innerText = card.cta

