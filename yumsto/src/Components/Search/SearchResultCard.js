import './styles/SearchResultCard.scss'
import ReactHtmlParser from 'react-html-parser'


const SearchResultCard= (props)=>{
    const paragraph = ()=>{
        const p = document.createElement('p')
        p.innerHTML = props.details.summary
        for(let i of p.childNodes){
            if(i.nodeName==='A'){
                i.setAttribute('target','_blank')
            }
        }
        return ReactHtmlParser(p.outerHTML)
    }
    return(
        <div className='searchCard'>
            <div className='cardImageContainer'>
                <img src={props.item.image} alt="item" />
            </div>
            <div className='cardDetailContainer'>
                <div className='item-title'>
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

export default SearchResultCard