
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, DollarSign } from "lucide-react";

const FintechOverview = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Fintech?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The fintech industry is experiencing explosive growth, with companies seeking 
            talented developers to build the financial infrastructure of tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center card-hover dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-8">
              <TrendingUp className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Rapid Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fintech investment reached $91.5B globally in 2021, with continued expansion expected
              </p>
            </CardContent>
          </Card>

          <Card className="text-center card-hover dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-8">
              <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Security Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">
                High demand for developers who understand financial security and compliance
              </p>
            </CardContent>
          </Card>

          <Card className="text-center card-hover dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-8">
              <DollarSign className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Competitive Pay</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Above-average salaries with equity opportunities in high-growth companies
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FintechOverview;
