import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import DrumKit from '@/components/things/week0/DrumKit'
import Clock from '@/components/things/week0/Clock'
import CSSVars from '@/components/things/week0/CSSVars'
import Arrays1 from '@/components/things/week0/Arrays1'
import Flex from '@/components/things/week0/Flex'

import TypeAhead from '@/components/things/week1/TypeAhead'
import Arrays2 from '@/components/things/week1/Arrays2'
import Canvas from '@/components/things/week1/Canvas'
import DevTools from '@/components/things/week1/DevTools'
import Shift from '@/components/things/week1/Shift'

import Video from '@/components/things/week2/Video'
import KeySequence from '@/components/things/week2/KeySequence'
import Slide from '@/components/things/week2/Slide'
import JSRefs from '@/components/things/week2/JSRefs'
import LocalStorage from '@/components/things/week2/LocalStorage'

import Shadow from '@/components/things/week3/Shadow'
import Sort from '@/components/things/week3/Sort'
import Reduce from '@/components/things/week3/Reduce'
import CamFun from '@/components/things/week3/CamFun'
import Speak from '@/components/things/week3/Speak'

import GeoLocation from '@/components/things/week4/GeoLocation'
import FollowHighlight from '@/components/things/week4/FollowHighlight'
import Speech from '@/components/things/week4/Speech'
import StickyNav from '@/components/things/week4/StickyNav'
import JSEvents from '@/components/things/week4/JSEvents'

import FollowNav from '@/components/things/week5/FollowNav'
import ClickDrag from '@/components/things/week5/ClickDrag'
import VideoSpeed from '@/components/things/week5/VideoSpeed'
import CountdownTimer from '@/components/things/week5/CountdownTimer'
import WhackAMole from '@/components/things/week5/WhackAMole'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },

    { path: '/drums', name: 'DrumKit', component: DrumKit },
    { path: '/clock', name: 'Clock', component: Clock },
    { path: '/cssvars', name: 'CSSVars', component: CSSVars },
    { path: '/arrays1', name: 'Arrays1', component: Arrays1 },
    { path: '/flex', name: 'Flex', component: Flex },

    { path: '/typeahead', name: 'TypeAhead', component: TypeAhead },
    { path: '/arrays2', name: 'Arrays2', component: Arrays2 },
    { path: '/canvas', name: 'Canvas', component: Canvas },
    { path: '/devtools', name: 'DevTools', component: DevTools },
    { path: '/shift', name: 'Shift', component: Shift },

    { path: '/video', name: 'Video', component: Video },
    { path: '/keysequence', name: 'KeySequence', component: KeySequence },
    { path: '/slide', name: 'Slide', component: Slide },
    { path: '/jsrefs', name: 'JSRefs', component: JSRefs },
    { path: '/localstorage', name: 'LocalStorage', component: LocalStorage },

    { path: '/shadow', name: 'Shadow', component: Shadow },
    { path: '/sort', name: 'Sort', component: Sort },
    { path: '/reduce', name: 'Reduce', component: Reduce },
    { path: '/camfun', name: 'CamFun', component: CamFun },
    { path: '/speak', name: 'Speak', component: Speak },

    { path: '/geolocation', name: 'GeoLocation', component: GeoLocation },
    { path: '/followhighlight', name: 'FollowHighlight', component: FollowHighlight },
    { path: '/speech', name: 'Speech', component: Speech },
    { path: '/stickynav', name: 'StickyNav', component: StickyNav },
    { path: '/jsevents', name: 'JSEvents', component: JSEvents },

    { path: '/follownav', name: 'FollowNav', component: FollowNav },
    { path: '/clickdrag', name: 'ClickDrag', component: ClickDrag },
    { path: '/videospeed', name: 'VideoSpeed', component: VideoSpeed },
    { path: '/countdowntimer', name: 'CountdownTimer', component: CountdownTimer },
    { path: '/whackamole', name: 'WhackAMole', component: WhackAMole }
  ]
})
