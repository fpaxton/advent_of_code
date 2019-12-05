const fuel_calc = (module_weight) =>  Math.floor(module_weight/3) - 2;

const modules = [128167,65779,88190,144176,109054,70471,113510,81741,65270,111217,51707,81122,142720,65164,85045,85776,51332,110021,99706,50512,95429,149220,102777,93907,61769,66946,121583,132351,53809,73261,122964,120792,73998,79590,140881,53130,82498,72725,127422,143777,55787,95454,88293,107988,145145,59562,142929,132977,88825,104657,70644,124614,66443,117825,97016,79578,136114,64975,113838,63294,58466,76827,56288,126977,63815,129398,123017,118773,144464,60620,79084,94685,70854,148054,134179,113832,113742,115771,115543,73241,62914,146134,128066,52002,132377,100765,105048,59936,131324,137384,139352,127350,116249,79847,53530,99738,61969,118730,121980,72977];

const reducer = (acc,cur) => fuel_calc(cur) + acc;
console.log(modules.reduce(reducer, 0));
