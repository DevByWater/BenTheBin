import { createContainer } from 'meteor/react-meteor-data'
import MainPage from './../pages/MainPage'

export default MainContainer = createContainer(({params}) => {
  Meteor.subscribe('bins')
  Meteor.subscribe('sharedBins')
  const currentUser = Meteor.user()
  return {
    currentUser
  }
}, MainPage)