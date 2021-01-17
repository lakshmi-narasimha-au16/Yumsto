import React from 'react'
import SubDayColumn from './SubDayColumn.js'
import './styles/MealPlans.scss'

class MealPlans extends React.Component{
    constructor(){
        super()
        this.state = {
            clickedValue:1
        }
    }

    passValueToDetail = (e) =>{
        console.log(e.target.attributes.value.value)
        this.setState({...this.state, clickedValue:e.target.attributes.value.value})
    }
    renderMealCards = () => {
        if(this.props.mealPlans){
            if(this.props.mealPlans.days){
                return this.props.mealPlans.days.map((day, idx)=>{
                    let date = new Date(day.date*1000)
                    date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
                    return(
                        <div className="dayMealPlan" key={idx}>
                            <div className="dayDateColumn">
                                <div>{day.day}</div>
                                <div>{date}</div>
                            </div>
                            <div className="subDayColumn"onClick={this.passValueToDetail}>
                                <div value="1" className="daySection">BreakFast</div>
                                <div value="2" className="daySection">Lunch</div>
                                <div value="3" className="daySection">Dinner</div>
                                <div value="4" className="daySection">Nutrition</div>
                            </div>
                            <SubDayColumn value={this.state.clickedValue} item={day}/>
                        </div>
                    )
                })
            }
        }
    }
    
    
    render(){
        return(
        <section>
            {this.renderMealCards()}
        </section>
    )
    }
    
}
export default MealPlans