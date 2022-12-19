
import {Action} from '../actions/activityActions'
import {Activity} from "../../types/activity"


const activityReducer = (state: Array<Activity> = initialState, action: Action) => {
  switch(action.type){
    case "SET_ACTIVITIES":
      return action.payload
    default:
      return initialState
  }
}


export default activityReducer

const initialState = [{
  id: 1,
  regionId: 662,
  tagIds: [
  "A0759",
  "A0764",
  "B0688",
  "C0504"
],
  productCode: "335557P1",
  matchRating: 88.8,
  description: "This tour goes through miami river where you can see miami;s beautiful skyline and stops at an island near by where you can jump in the water and enjoy the yacht with friends.",
  starRating: 3.4,
  title: "Yacht tour around miami's bay",
  productLink: "https://www.viator.com/en-NZ/tours/Miami/Yacht-tour-around-miamis-bay/d662-335557P1?mcid=42383&pid=P00051152&medium=api&api_version=2.0",
  imageUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0d/3d/06/ad.jpg",
  supplier: "Andre Mendoza",
  price: 1400.0,
  currency: "USD",
  duration: "Half-Day",
},{
  id: 1,
  regionId: 662,
  tagIds: [
  "A0759",
  "A0764",
  "B0688",
  "C0504"
],
  productCode: "335557P1",
  matchRating: 88.8,
  description: "This tour goes through miami river where you can see miami;s beautiful skyline and stops at an island near by where you can jump in the water and enjoy the yacht with friends.",
  starRating: 3.4,
  title: "Yacht tour around miami's bay",
  productLink: "https://www.viator.com/en-NZ/tours/Miami/Yacht-tour-around-miamis-bay/d662-335557P1?mcid=42383&pid=P00051152&medium=api&api_version=2.0",
  imageUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0d/3d/06/ad.jpg",
  supplier: "Andre Mendoza",
  price: 1400.0,
  currency: "USD",
  duration: "Half-Day",
},{
  id: 1,
  regionId: 662,
  tagIds: [
  "A0759",
  "A0764",
  "B0688",
  "C0504"
],
  productCode: "335557P1",
  matchRating: 88.8,
  description: "This tour goes through miami river where you can see miami;s beautiful skyline and stops at an island near by where you can jump in the water and enjoy the yacht with friends.",
  starRating: 3.4,
  title: "Yacht tour around miami's bay",
  productLink: "https://www.viator.com/en-NZ/tours/Miami/Yacht-tour-around-miamis-bay/d662-335557P1?mcid=42383&pid=P00051152&medium=api&api_version=2.0",
  imageUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0d/3d/06/ad.jpg",
  supplier: "Andre Mendoza",
  price: 1400.0,
  currency: "USD",
  duration: "Half-Day",
},{
  id: 1,
  regionId: 662,
  tagIds: [
  "A0759",
  "A0764",
  "B0688",
  "C0504"
],
  productCode: "335557P1",
  matchRating: 88.8,
  description: "This tour goes through miami river where you can see miami;s beautiful skyline and stops at an island near by where you can jump in the water and enjoy the yacht with friends.",
  starRating: 3.4,
  title: "Yacht tour around miami's bay",
  productLink: "https://www.viator.com/en-NZ/tours/Miami/Yacht-tour-around-miamis-bay/d662-335557P1?mcid=42383&pid=P00051152&medium=api&api_version=2.0",
  imageUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0d/3d/06/ad.jpg",
  supplier: "Andre Mendoza",
  price: 1400.0,
  currency: "USD",
  duration: "Half-Day",
}]