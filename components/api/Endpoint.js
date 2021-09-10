import TowerText from "../tower/TowerText";

export default function Endpoint({item}) {


    return (
       <>
           <div>
               <div>
                   <TowerText textColor={"#FFB400"} variant="h4">
                       {item.request.method}
                   </TowerText>
                   <TowerText variant="h4" font={true}>
                       {item.name}
                   </TowerText>
               </div>
               <TowerText variant="h5" font={true}>
                   {item.description}
               </TowerText>
               <div>
                   <div>
                       {item.request.body.query}
                   </div>
                   <div>
                       {item.request.body.variables}
                   </div>
               </div>
           </div>
       </>
    );
}