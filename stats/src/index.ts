import { Summary } from "./Summary";
import { MatchReader } from "./MatchReader";

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalaysisWithHtmlReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
