import React from 'react'
import { QuestionsView } from '../containers/QuestionView'
import {PersonalisationBanner} from '../components/PersonalisationBanner'
import { ExploreBar } from '../containers/ExploreBar'
import { ActivityCard } from '../components/ActivityCard'
import { ActivityCardExpanded } from '../components/ActivityCardExpanded'

export function HomePage() {
  return (
    <div>  
      <QuestionsView />
      <ExploreBar/>
      <ActivityCard />
      <ActivityCardExpanded />
      <PersonalisationBanner/>
    </div>
  )
}
