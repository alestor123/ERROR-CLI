var chalk = require('chalk');
module.exports = (head,err) => {
if(err){
console.log(chalk.redBright.bold(` ✖ ${head || 'ERROR'} \n ✖ Error : ${err.name} \n ℹ Cause : ${chalk.green(err.message)} \n ℹ Stack : ${chalk.green(err.stack)} `))
}
}