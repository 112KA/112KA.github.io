import axios from 'axios';


export default {
	cards:null,
	slots:[],
	slotIndex:0,

	init() {

		let slotIndex = localStorage.getItem("slotIndex");
		this.slotIndex = slotIndex===null ? 0 : slotIndex;

	    for(let i=0; i<5; i++) {
	      let indices = localStorage.getItem("slot"+i);
	      this.slots[i] = indices===null ? [0,1,2,3,4,5,6,7] : indices.split(",");
	    }

		let url = "./assets/data/cards.json";
		return axios.get(url)
			.then((res) => {
				this.cards = res.data.list;
			});
	},

	getCardsBySlotIndex(index) {
		let indices = this.slots[index]
		, ret = [];
		indices.forEach((v, index) => {
			ret.push(this.cards[v]);
		});
		return ret;
	},

	getShuffleCards() {
		let list = this.cards.slice(0);
		const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
		shuffleArray(list);
		return list.slice(0, 8);
	},

	saveCardsBySlotIndex(index, cards) {
		let indices = [];
		cards.forEach((v, index) => {
			indices.push(v.id);
		});
		this.slots[index] = indices;
		localStorage.setItem("slot"+index, indices);
	},

	saveSlotIndex(v) {
		this.slotIndex = v;
		localStorage.setItem("slotIndex", v);
	},




}