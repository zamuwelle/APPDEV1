import { useState } from 'react';

const userData = {
	name: "Samuel Binos",
	avatarUrl: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png&cstp=mx2048x2048&ctp=s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeG20Y_KlI_Oh6JDaymwptiFWt9TLzuBU1Ba31MvO4FTUAgn_ji3y9pnJHOvdjQ6mTkHQyh7ZgnUccGXFcvQunSJ&_nc_ohc=q9g1XDKkVZcQ7kNvwGMxjE0&_nc_oc=AdqMLgdpOTfKaaYNR4xhdKz4nnZvHHima5cogjvnsCJPuzZszbzTqzO_ae14VgZMiBA&_nc_zt=24&_nc_ht=scontent.fmnl3-1.fna&_nc_ss=7b2a8&oh=00_AQBpA5SLiN2-TNVTUmDG56p_DwkXorDX01v_WzuUhgN3RA&oe=6A89D43A", // sample avatar
	bio: "I love to abide alone, and I will not spend my breath to answer thee.",
	skills: ["React", "JavaScript", "HTML", "CSS"],
	isOnline: true,
	lastUpdated: "1 minute ago",
};

function UserProfileCard({ user = userData }) {
	const [messageCount, setMessageCount] = useState(0);
	const [isFavorited, setFavorite] = useState(false);

	function handleSendMessage() {
		setMessageCount(messageCount + 1);
	}

	function handleReset() {
		setMessageCount(0);
	}

	function handleFavorite() {
		setFavorite(!isFavorited);
	}

	return (
		<div className="profile-card">
			<img src={user.avatarUrl} />

			<h2>{user.name}</h2>

			<label htmlFor="bio">Bio</label>
			<p id="bio">{user.bio}</p>

			<h3>Skills</h3>
			<ul>
				{user.skills.map(skill => (
					<li key={skill}>{skill}</li>
				))}
			</ul>

			<div style = {{ color: "blue", fontWeight: "bold" }}>
				Messages sent: {messageCount}
			</div>

			{ user.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span> }

			<button onClick={handleSendMessage}>Send Message</button>
			<button onClick={handleReset}>Reset</button>
			{user.isOnline && (
				<button onClick={handleFavorite}>
					{isFavorited ? "★ Favorited" : "☆ Favorite"}
				</button>
			)}
			<p className="footer">Card last updated: {user.lastUpdated}</p>
		</div>
	);
}

export default UserProfileCard;
