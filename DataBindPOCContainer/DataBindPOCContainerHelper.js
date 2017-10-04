({
	retrieveQuestions : function(cmp) {
		var action = cmp.get("c.getQuestions");

		action.setCallback(this, function(response) {
			var state = response.getState();

			if(state === "SUCCESS") {
				console.log("Loaded Questions");

				var questions = JSON.parse(response.getReturnValue());
				console.log("questions", questions);
				cmp.set("v.questions", questions);
			}
		});

		$A.enqueueAction(action);
	},

	setQuestions : function(cmp) {
		var questions = [
			{
				text: "What is your favorite color?",
				answer: "",
				options: [
					{
						label: "Blue",
						value: "blue",
					},
					{
						label: "Green",
						value: "green",
					},
					{
						label: "Yellow",
						value: "yellow",
					}],
			},
			{
				text: "What is your favorite animal?",
				answer: "",
				options: [
					{
						label: "Dog",
						value: "dog",
					},
					{
						label: "Cat",
						value: "cat",
					},
					{
						label: "Mouse",
						value: "mouse",
					}],
			}
		];

		questions.forEach(function(question) {
			question.answer = question.options[0].value;
		});

		console.log("questions", questions);
		cmp.set("v.questions", questions);
	}
})