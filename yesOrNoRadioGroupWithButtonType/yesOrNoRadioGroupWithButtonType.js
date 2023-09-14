import { LightningElement, api } from 'lwc';

export default class YesOrNoRadioGroupWithButtonType extends LightningElement {
    @api selectedOption;
    @api selectedOption2;
    @api buttonSelection;
    
    value=""
    
    options = [
        { label: 'Yes', value: 'Yes'},
        { label: 'No', value: 'No'},
    ];
    options2 = [
        { label: 'Yes', value: 'Yes'},
        { label: 'No', value: 'No'},
    ];

    handleChange(event){
        this.selectedOption = event.detail.value;
    }
    handleChange2(event){
        this.selectedOption2 = event.detail.value;
    }
    
    /*@api 
    validate(){
        if(this.selectedOption == null || this.selectedOption2 == null){
            console.log('selectedOption: ' + this.selectedOption);
            console.log('selectedOption2: ' + this.selectedOption2);
            if(this.buttonSelection == 'Next'){
                console.log('selected button: ' + this.buttonSelection);
                return { isValid: false, errorMessage: 'Please select an option.' };
            }
        }
        return { isValid: true };

    }*/

}