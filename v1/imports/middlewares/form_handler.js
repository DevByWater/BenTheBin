import { Bins } from '../../imports/collections/bins'


export const FormHandler = {
    error: {},
    nullBinError : 'You must supply a Bin name.',
    duplicateBinError: 'Bin already exists',
    checkBinName: function(name){
        if(name.length <= 0){
            return this.error = {message: nullBinError}
        }
        if(Bins.findOne(name)){
            return this.error = {message: duplicateBinError}
        }
        return false
    }
}


