const React = require('react')

export default class Body extends React.Component {
  render() {
    return(
      <div class="body">
      <section class="bodyx">
	<div class="insidebody">
	<div id="textanimation1">
		<div class="textanimation1" >
			SHARE AND LEARN
		</div>
	</div>
	<div id = "textanimation2">
	    <div class = "textanimation2" >
	   		Join Fab now and connect to people who can help you learn the skills you want to become an expert at. In return teach them the skills you know. A win win for both!
	 	</div>
	</div>
	</div>

	<div class="img">
		<img src="../static/images/img1.png" />
	</div>
	</section>
	<div class="body1">
		<div class="body1header">See how it works</div>

		<span class="left">
			<div class="number">01</div>
			<div class="tag">Create an account</div>
			<div class="tagcontent">Create a free account today and tell us what you are an expert at and what you want to learn. We'll help you meet people you can share your knowledge with.</div>

		</span>
		<img class = "img1" src="../static/images/signup.gif /">

		<span class="right">
			<div class="number">02</div>
			<div class="tag">Know your 'skill complimentaries'</div>
			<div class="tagcontent">Get the list of people who have the skills you want to learn. You can teach them too. Knowledge is the one thing that increases when shared.</div>
		</span>
		<img class="img2" src="../static/images/img2.png" />

		<span class="left">
			<div class="number">03</div>
			<div class="tag">Connect</div>
			<div class="tagcontent">Once you've seen all your matches, connect with them, learn new things and get to know new people. </div>
		</span>
		<img class="img3" src="../static/images/img3.png" />

		<span class="right">
			<div class="number">04</div>
			<div class="tag">Rate your new buddy</div>
			<div class="tagcontent">Met your buddy and liked his company? Want to connect with more people like these? Rate there profiles!</div>
		</span>
		<img class="img4" src="../static/images/img4.png" />
	</div>
    );
  }
}
