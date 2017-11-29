var UserAgent = {
	isSPDevice:/iPhone|iPod|iPad|Android|Windows Phone/i.test(window.navigator.userAgent)
};
module.exports = UserAgent;