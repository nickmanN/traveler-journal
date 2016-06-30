import Ember from 'ember';

let journeys = [{
	id: 1,
	title: 'Great Barrier Reef Australia',
	description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla 
	rhoncus auctor est, sed pretium sem commodo eget. Nullam massa enim, iaculis et 
	consequat egestas, rutrum non lorem. Sed maximus, urna et posuere tincidunt, dui 
	metus volutpat lectus, nec varius nisl erat at est. Sed ac interdum ligula. Integer 
	placerat neque. `
}, {
	id: 2,
	title: 'Bora Bora',
	description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra
	malesuada leo, ut malesuada arcu luctus sit amet. Aenean sit amet nunc id leo sollicitudin
	ultricies eu nec ex. Nulla cursus fringilla mi id viverra. Sed porta, ligula eget malesuada
	lobortis, justo enim gravida felis, scelerisque mattis massa sem sit.`
}, {
	id: 3,
	title: 'Melbourne',
	description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet
	felis scelerisque, ultricies enim ac, eleifend est. Donec vel tortor augue. Nunc porta libero nunc,
	in consectetur nisi facilisis pretium. Phasellus interdum urna nisl. Integer vitae enim aliquam
	augue varius molestie. Praesent a orci sit amet ipsum imperdiet ultrices.`
}];

export default Ember.Component.extend({
	arrOfJourneys: journeys
});
