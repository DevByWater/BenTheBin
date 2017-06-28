import { createContainer } from 'meteor/react-meteor-data'
import MainPage from './../pages/MainPage'
import { Bins } from '../../collections/bins'

export default MainContainer = createContainer(({params}) => {
  Meteor.subscribe('bins')
  Meteor.subscribe('sharedBins')
  const currentUser = Meteor.user()
  const bins = Bins.find({}).fetch()
  return {
    currentUser,
    bins
  }
}, MainPage)