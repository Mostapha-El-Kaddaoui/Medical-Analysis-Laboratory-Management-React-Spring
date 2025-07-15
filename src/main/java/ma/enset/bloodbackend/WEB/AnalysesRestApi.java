package ma.enset.bloodbackend.WEB;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import ma.enset.bloodbackend.ENTITYS.Analyse;
import ma.enset.bloodbackend.ENTITYS.Rendezvous;
import ma.enset.bloodbackend.SERVICES.MedicalAnalysisService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
public class AnalysesRestApi {
    private MedicalAnalysisService medicalAnalysisService;

    @GetMapping("/analyses")
    public List<Analyse> saveCustomer(){
        return medicalAnalysisService.getAllAnalyses();
    }

    @GetMapping("/analyses/{codeanalyse}")
    public Analyse getOneAnalyse(@PathVariable(name = "codeanalyse") String codeAnalyse){
        return medicalAnalysisService.getOneAnalyse(codeAnalyse);
    }

}
