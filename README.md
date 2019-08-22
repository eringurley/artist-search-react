##Pagination:
2926 an array of items. on any given call we’re only going to get 25 items
as we want to page through this item, we want to skip 25
offset 0 to the first. 25 page 1
offset 25. to the next 50. page 2
offset. 50 to. the next. 75 page 3

25&offset=${(page-1)*25}`
in your api response, calculate the total number of pages / 25 and take the ceiling of that
Math.ceil(2926/25) = 118 total pages
{ artists: [ ], totalPages:118 } 


Search Input: 
on changing. the input box, we have this line in the handleChange
this.props.history.push( `/about?text=${this.state.text}`) ;

componentDidMount( ) {
	const search =  new UrlSearchParams(this.props.location.search)
	this.setState({text: search.get(‘text’) });


HOC
higher order components
a function that returns a component
function with lists that will return a list component


Render Props
component like Lists which will take a List, an array of items, and also a component to use
List.propTypes = {
key: propTyps.string.isRequired

}.isRequired
