var msg = {	
	0 : 'No coffee',
	1 : 'Run the coffee is finishing',
	2 : 'Has coffee',
	3 : 'Fresh coffee'
};

coffee_level = [
	{'min':0, 'max':10},
	{'min':20, 'max':30},
	{'min':40, 'max':70},
	{'min':80, 'max':100}
];

exports.message = function (level) {    
   for(i=0; i < coffee_level.length ; i++){
		if (is_level(level,i))   	  
   	  		return msg[i];   	    	  		
	}
};


function is_level(status, index){
	level = coffee_level[index]
	return status >= level['min']  &&  status <= level['max']
}


