const image_files = ['./img/the_way_she_looks_at_me.jpg', './img/literally_perfect.jpeg', './img/eye_me.jpg', './img/FAC21C1D-B731-4428-AF96-1C6E4DA1FCC6.JPG', './img/A3A64891-3DBD-49A9-A8D8-2834BF5005AE.JPG', './img/26C71F0F-AF9E-4925-BD3E-230190DDCCDE.JPG', './img/drunk_at_ralphs.jpeg', './img/DCD65049-57D2-4B46-BC91-7C9E6A1D5EA6.JPG', './img/742ABDE3-C0BE-445D-9E66-76DA2BF96F9A.JPG', './img/getty_kiss.jpeg', './img/i_love_her.jpg', './img/masq.jpg', './img/us_with_gru_and_kevin.jpeg', './img/D00EE00A-FF13-4B6F-947C-D6FB8F28F54D.JPG', './img/all_tucked_in.jpg', './img/laughing_fan_falling.jpg', './img/blinged_out.jpeg', './img/me_digging_in.jpeg', './img/5A061C84-452F-4EF7-ADA0-7BFEFAF9C285.JPG', './img/1267FA49-E440-4A14-BDEF-98C6AD1B1077.JPG', './img/A8AB76C4-6F9C-4221-955D-FD458DD6825F.JPG', './img/AA5C262E-2CC8-4B54-BB0F-E539B21450D4.JPG', './img/kissing_at_viterbi_ball.jpeg', './img/FE9DE2E7-B204-47F4-873A-C6687E36891E.JPG', './img/in_la_gondola.jpeg', './img/knotts_mirror.jpeg', './img/DRIVE.jpeg', './img/beautiful.jpeg', './img/lowes_in_the_summer.jpg', './img/makeup_in_basement.jpeg', './img/sweeping_in_my_bed_at_gateway.jpeg', './img/dive.jpeg', './img/us.jpg', './img/84049734-702D-450C-A58B-06980CBCCFDE.JPG', './img/teacups.jpg', './img/FA023B9C-7345-4311-A48E-EA27BF7AEF85.JPG', './img/1A93EC4D-AB89-4039-A625-EE317521F587.JPG', './img/0B16330F-66B8-4BF9-9E96-CAB5202D05F0.JPG', './img/funny.jpeg', './img/B72AFEFD-63AE-4572-BC23-6712AE2D66BD.JPG', './img/so_beautiful.jpg', './img/descanso_bench.jpeg', './img/adorable_headphone_cheek_smush.jpeg', './img/perfect_smile.jpeg', './img/me_on_lapbottom.jpg', './img/cute_in_hat.jpg', './img/910D9DB9-CB15-4ABC-ABBE-AC0A119D21B4.JPG', './img/1069621C-6413-4CCE-A159-71548DE4C7AB.JPG', './img/barbie_spaceship.jpeg', './img/looking_at_flowers_or_something.jpg', './img/playing_checkers_on_the_science_museum_computer.jpeg', './img/DDE52EA9-516A-45D8-A0FB-2C86C49113F0.JPG', './img/DD2BB04D-9067-4995-8D56-258A4ACD8D45.JPG', './img/F97F32E4-06D5-4DC4-923D-7EBCA60C0B01.JPG', './img/face_smush_lacma.jpeg', './img/BIG_PIZZA.jpeg', './img/me_eating_donuts.jpeg', './img/E73C8537-1229-4D25-BD59-C03DC5062767.JPG', './img/haha.jpeg', './img/rosemary.jpg', './img/kiss_face_smush.jpeg', './img/FFF0DE3E-82B8-4CE2-958C-6523571CDF7B.JPG', './img/outside_universal.jpeg', './img/crazy.jpeg', './img/im_in_love_with_her.jpeg', './img/36C39441-EFF6-4B95-9170-149044746CCD.JPG', './img/EB6D52DD-0A15-4DFB-BA0D-8A77D592E88B.JPG', './img/riding_away.jpeg', './img/with_la_minion.jpg', './img/twizzler_straw.jpg', './img/disney_kiss.jpg', './img/6FAB51FE-5283-45A4-A480-E07F0223BDD2.JPG', './img/60D8F0F8-CC3B-4ADB-B0C1-878087EB68A5.JPG', './img/cute_flower_rub.jpeg', './img/5C48E11D-12A3-429F-A144-E6F5545E972E.JPG', './img/SO_KEESABLE_X_PIZZA.jpg', './img/us_with_mater.jpg', './img/distracting.jpg', './img/AADCDAFC-E58F-4DCE-9952-8CAD2DAE13DC.JPG', './img/143F2488-3F4A-4976-B84C-2D41D615186D.JPG', './img/5D289A18-4F78-412E-B804-0F82C50B5F5F.JPG', './img/us_with_howard.jpeg', './img/8A71D536-9AAD-4D6F-A049-38AD3F8CF3BC.JPG', './img/5C473C08-57C1-4EAA-8830-26D6C4ACEF3B.JPG', './img/roller_coaster.jpeg', './img/awwwwwwwwww.jpg', './img/BITE_NOSE.jpeg', './img/in_la_oval_office.jpeg', './img/perfect_on_billy_goat_trail.jpeg', './img/perfect_in_headphones.jpg', './img/descanso_flowers.jpg', './img/close_up_where_i_look_disgusting.jpg', './img/sunlight_kiss.jpg', './img/C2831AF7-C909-41E4-802C-E7056996442A.JPG', './img/perfect_in_bed.jpeg', './img/yogurt_water_and_alfred.jpeg', './img/bridge_hug.jpeg', './img/huntington_shoulder.jpeg', './img/PERFECT.jpeg', './img/moms_lockscreen.jpeg', './img/C3C2BC73-62DA-49A2-8E7F-8A6B535B15F9.JPG', './img/40CC0436-9D20-4959-A3A8-D30E5DB2A1F6.JPG', './img/cute_in_spudnuts.jpeg', './img/483BCE27-83DA-4E1C-9245-F72E62441460.JPG', './img/barbie_talkshow.jpeg', './img/0D0ABD1B-22A4-4459-B262-51C1B42F5D45.JPG', './img/us_with_bowser.jpeg', './img/9617C47C-B6BE-4DEF-80DF-857C24C554D7.JPG', './img/the_grove_car.jpeg', './img/FUCKED_UP.jpeg', './img/hammock.jpeg', './img/malibu_gardens.jpeg', './img/rooftop.jpeg', './img/B1512512-D807-4888-86BA-28E567170298.JPG', './img/purple_mirror.jpeg', './img/us_in_parking_garage.jpg', './img/fancy_mirror.jpeg', './img/gcm_photobooth.jpeg', './img/me_with_flowers.jpg', './img/66B638AF-12CB-49A8-BF64-7E15C2A0D155.JPG', './img/she_is_everything_to_me.jpg', './img/strawberries.jpeg', './img/868EA397-5E7D-4D4F-9A40-847BB2F97197.JPG', './img/cute.jpeg', './img/9F7CA23E-5477-4DBE-9CDA-4A5786B4A96A.JPG', './img/perfect_in_the_grass.jpeg', './img/perfectperfectperfect.jpeg', './img/getty_hug.jpeg', './img/i_look_atrocious.jpeg', './img/checkers_game_that_I_WON.jpeg', './img/1BBE5CE0-E620-480D-811E-B89B86689DF8.JPG', './img/valerie_SMALL.jpeg', './img/malibu_gardens_2.jpeg', './img/getty_smile.jpg', './img/us_in_getty_glass.jpeg', './img/perfect_smile.jpg', './img/so_cute_with_fan.jpg', './img/192E0EF5-AAD3-4F2E-AAB0-38FE63610C34.JPG', './img/WHEEEEEEEE.jpeg', './img/smiling_at_space_mountain_i_think.jpg', './img/nembaur.jpeg', './img/viterbi_ball.jpeg', './img/2909B594-7CA2-40B5-8EDC-4CFE8BD2AE08.JPG', './img/094ABCB6-EE2C-42B3-941F-05194F16C7CC.JPG', './img/eye_valerie.jpg', './img/cutecutecute.jpeg', './img/working_for_real.jpeg', './img/titanique.jpg', './img/B5C59C33-C102-4247-B1CD-5061C91487CB.JPG', './img/5C6C71B2-E348-477E-B9E6-46AB82E11AB2.JPG', './img/im_so_in_love.jpg', './img/sweepy_in_pasadena.jpeg']

// shuffle images so they appear in a random order without repeating
for(let i = 0; i < image_files.length * 3; i++) {
	const a = Math.floor(Math.random() * image_files.length);
	const b = Math.floor(Math.random() * image_files.length);

	const temp = image_files[a];
	image_files[a] = image_files[b];
	image_files[b] = temp;
}

const hoursNode = document.querySelector("#countdown-hours")
const minutesNode = document.querySelector("#countdown-minutes")
const secondsNode = document.querySelector("#countdown-seconds")
const imgContainer = document.querySelector("#img-container")

// set initial image
imgContainer.style.backgroundImage = `url(${image_files[0]})`
let image_index = 0;

imgContainer.addEventListener('click', () => {
	// choose a random image to display
	const image = image_files[image_index++]
	image_index %= image_files.length

	// display it
	imgContainer.style.backgroundImage = `url(${image})`
});

setInterval(() => {
	const now = Date.now();	// this is in GMT
	const arrival = new Date('June 8, 2024 20:30:00 GMT');

	let secondsLeft = Math.ceil((arrival - now) / 1000);
	const hoursLeft = Math.floor(secondsLeft / 3600);
	secondsLeft %= 3600;
	const minutesLeft = Math.floor(secondsLeft / 60)
	secondsLeft = Math.floor(secondsLeft % 60);

	hoursNode.textContent = `${hoursLeft} hour${hoursLeft === 1 ? '' : 's'}`;
	minutesNode.textContent = `${minutesLeft} minute${minutesLeft === 1 ? '' : 's'}`;
	secondsNode.textContent = `and ${secondsLeft} second${secondsLeft === 1 ? '' : 's'}`;

	document.title = `${hoursLeft}hrs ${minutesLeft}m ${secondsLeft}s`
}, 1000)