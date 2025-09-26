import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
    const navigate = useNavigate()
    const [SearchParams] = useSearchParams();
    const title = SearchParams.get("title");
    const description = SearchParams.get("description");
    return (
     <div className="h-screen w-screen bg-background p-6">
        <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
        <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-primary-foreground transition-colors hover:text-primary">
            <ChevronLeftIcon />
        </button>
        <h1 className="text-3xl text-primary font-bold text-center">
          Task Description
        </h1>
        </div>

        <div className="bg-surface p-4 rounded-md">
         <h2 className="text-xl font-bold text-primary-foreground">{title}</h2>
         <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
    );
}

export default TaskPage;