import './styles/SearchResultCard.scss'
import ReactHtmlParser from 'react-html-parser'
import {withRouter} from 'react-router-dom'


const SearchResultCard= (props)=>{
    const paragraph = ()=>{
        if(props.details){
            const p = document.createElement('p')
            p.innerHTML = props.details.summary
            for(let i of p.childNodes){
                if(i.nodeName==='A'){
                    i.setAttribute('target','_blank')
                }
            }
            return ReactHtmlParser(p.outerHTML)
        }
        
    }
    const imageRender = ()=>{
        if(props.details){
            return props.details.image
        }
    } 
    const detailPagePush = () =>{
        props.history.push(`/details/${props.item.id}`)
    }
    return(
        <div className='searchCard' onClick={detailPagePush}>
            <div className='cardImageContainer'>
                <img src={imageRender()} alt="item" />
            </div>
            <div className='cardDetailContainer'>
                <div className='item-title' >
                    {props.item.title}
                </div>
                <div className='item-detail'>
                    {paragraph()}
                    <button className='readMoreBtn'>Make Recipe</button>
                </div>
                

            </div>

        </div>
    )

}

export default withRouter(SearchResultCard)