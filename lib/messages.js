coffeelevel = [
	{'min':0, 'max':10, 'msg': 'No coffee ☕'},
	{'min':20, 'max':30, 'msg': 'Run the coffee is finishing ☕'},
	{'min':40, 'max':70, 'msg': 'Has coffee ☕'},
	{'min':80, 'max':100, 'msg': 'Fresh coffee ☕'}
];

exports.message = function (status) {
   for(i=0; i < coffeelevel.length; i++){
   		if (isLevel(status,i))
   			return coffeelevel[i]['msg'];
	}
};

function isLevel(status, index){
	level = coffeelevel[index]
	return status >= level['min']  &&  status <= level['max']
}


