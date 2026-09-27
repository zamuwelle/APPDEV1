function fetchQuestMock(callback) {
	setTimeout(() => {
		callback({ quest: "Defeat Calamity Ganon", rewardRupees: 500 })
	}, 1000)
}

fetchQuestMock((questData) => {
	console.log("Got quest:", questData)
})

function fetchQuest() {
	return new Promise((resolve) => {
		setTimeout(() => resolve({ quest: "Free the Divine Beasts", rewardRupees: 999 }), 1000)
	})
}

async function showQuest() {
	try {
		const quest = await fetchQuest()
		console.log("Got quest:", quest)
	} catch (error) {
		console.log("Failed to load quest")
	}
}

showQuest()