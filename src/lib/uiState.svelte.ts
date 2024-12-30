let allez_state: boolean = $state(false);
let allez_fx: number | null = $state(null);

export function getAllezLaaaa() {
	function switchAllezLaaa(value?: boolean) {
		if (value === undefined) {
			allez_state = !allez_state;
		} else {
			allez_state = value;
		}
    if (!allez_state) {
      allez_fx = null;
    }
	}
  function setAllezFx(value: number | null) {
    allez_fx = value;
  }
	return {
		get allez_state() {
			return allez_state;
		},
    get allez_fx() {
      return allez_fx;
    },
		switchAllezLaaa,
    setAllezFx
	};
}
