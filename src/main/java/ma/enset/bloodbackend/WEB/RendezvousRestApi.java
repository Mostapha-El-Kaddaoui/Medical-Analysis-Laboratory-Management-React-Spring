package ma.enset.bloodbackend.WEB;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import ma.enset.bloodbackend.ENTITYS.Rendezvous;
import ma.enset.bloodbackend.SERVICES.MedicalAnalysisService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
public class RendezvousRestApi {
    private MedicalAnalysisService medicalAnalysisService;

    @PostMapping("/rendezvous")
    public Rendezvous saveCustomer(@RequestBody Rendezvous rendezvous){
        return medicalAnalysisService.saveRendezvous(rendezvous);
    }
    @PutMapping("/rendezvous/{id}")
    public Rendezvous saveCustomer(@PathVariable(name = "id") Long rendezvousId, @RequestBody Rendezvous rendezvous){
        rendezvous.setId(rendezvousId);
        return medicalAnalysisService.updateRendezvous(rendezvous);
    }

    @GetMapping("/rendezvous")
    public List<Rendezvous> getAllRendezvous(){
        return medicalAnalysisService.getAllRendezvous();
    }

    @GetMapping("/rendezvous/{id}")
    public Rendezvous getAllRendezvous(@PathVariable(name = "id") Long rendezvousId){
        return medicalAnalysisService.getRendezvous(rendezvousId);
    }

    @DeleteMapping("/rendezvous/{id}")
    public void deleteRendezvous(@PathVariable(name = "id") Long rendezvousId){
        medicalAnalysisService.deleteRendezvous(rendezvousId);
    }

}
