import { StaticItem, StaticList, StaticTitle, StaticWrap } from "./Statistics.styled";
import { RandomColorGenerate } from "./RandomColorGenerate"

export const Statistics = ({ title, stats }) => { // деструктуризація пропсів title та stats

    return ( 
        <StaticWrap className="statistics">
            {/* якщо title переданий, то виводимо його як заголовок (рендер розмітки за умовою) */}
            {title && <StaticTitle className="title">{title}</StaticTitle>} 

            {/* мапимо масив stats, який містить об'єкти статистики, і виводимо кожен елемент у відповідний блок */}
            <StaticList className="stat-list">

                {stats.map(stat => (
                    <StaticItem style={{backgroundColor: RandomColorGenerate()}} className="item" key={stat.id}>
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>                    
                    </StaticItem>
                ))}
            </StaticList>
        </StaticWrap>
    );
};