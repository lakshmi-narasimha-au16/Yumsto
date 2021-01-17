import React from 'react'
import './styles/SubDayColumn.scss'

const SubDayColumn = (props) =>{
    console.log(props)
    const Nutrients = props.item.nutritionSummary.nutrients
    const nutrientsDinner = props.item.nutritionSummaryDinner.nutrients
    const nutrientsLunch = props.item.nutritionSummaryLunch.nutrients
    const nutrientsBreakfast = props.item.nutritionSummaryBreakfast.nutrients
    const slot = props.value== 1 ? "Breakfast" : props.value== 2 ? "Lunch" : "Dinner"
    if (props.value == 4){
        return (
        <React.Fragment>
            <div className="subDayColumnDetail">
                <h1 className="slotHeading" >Overall Nutrition</h1>
                <div className="nutrition">
                    {Nutrients.map((nutrient) => {
                        return `${nutrient.title}: ${nutrient.amount}${nutrient.unit} `
                    })}
                </div>
            </div>
            
        </React.Fragment>
        )
    }
    else if(props.value==3){
        if(props.item.items[2]){
            return(
            <React.Fragment>
                <div className="subDayColumnDetail">
                    <h1 className="slotHeading" >{slot}</h1>
                    <h4>{props.item.items[2].value.title}</h4>
                    <div className="itemNutrition">
                        {nutrientsDinner.map((nutrient)=>{
                            return `${nutrient.title}: ${nutrient.amount} ${nutrient.unit}`
                        })}
                    </div>
                </div>
                
            </React.Fragment>
        )
        }
        else{
            return(
                <React.Fragment>
                    <div className="subDayColumnDetail">
                        <h1 className="slotHeading" >{slot}</h1>
                        <p>Nothing is planned in this slot</p>
                    </div>
                </React.Fragment>
            )
        }
        
    }
    else if(props.value==2){
        if(props.item.items[1]){
            return(
            <React.Fragment>
                <div className="subDayColumnDetail">
                    <h1 className="slotHeading" >{slot}</h1>
                    <h4>{props.item.items[1].value.title}</h4>
                    <div className="itemNutrition">
                        {nutrientsLunch.map((nutrient)=>{
                            return `${nutrient.title}: ${nutrient.amount} ${nutrient.unit}`
                        })}
                    </div>
                </div>
                
            </React.Fragment>
        )
        }
        else{
            return(
                <React.Fragment>
                    <div className="subDayColumnDetail">
                        <h1 className="slotHeading" >{slot}</h1>
                        <p>Nothing is planned in this slot</p>
                    </div>
                </React.Fragment>
            )
        }
        
    }
    else if(props.value==1){
        if(props.item.items[1]){
            return(
            <React.Fragment>
                <div className="subDayColumnDetail">
                    <h1 className="slotHeading" >{slot}</h1>
                    <h4>{props.item.items[0].value.title}</h4>
                    <div className="itemNutrition">
                        {nutrientsBreakfast.map((nutrient)=>{
                            return `${nutrient.title}: ${nutrient.amount} ${nutrient.unit}`
                        })}
                    </div>
                </div>
                
            </React.Fragment>
        )
        }
        else{
            return(
                <React.Fragment>
                    <div className="subDayColumnDetail">
                        <h1 className="slotHeading" >{slot}</h1>
                        <p>Nothing is planned in this slot</p>
                    </div>
                </React.Fragment>
            )
        }
        
    }
    
}
export default SubDayColumn