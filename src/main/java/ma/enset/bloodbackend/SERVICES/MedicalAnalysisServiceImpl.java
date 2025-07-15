package ma.enset.bloodbackend.SERVICES;

import lombok.AllArgsConstructor;
import ma.enset.bloodbackend.ENTITYS.Analyse;
import ma.enset.bloodbackend.ENTITYS.Rendezvous;
import ma.enset.bloodbackend.REPOSITORY.AnalyseRepository;
import ma.enset.bloodbackend.REPOSITORY.RendezvousRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor

public class MedicalAnalysisServiceImpl implements MedicalAnalysisService{
    private final RendezvousRepository rendezvousRepository;
    private final AnalyseRepository analyseRepository;

    @Override
    public Rendezvous saveRendezvous(Rendezvous rendezvous) {
        Rendezvous savedRendezvous = rendezvousRepository.save(rendezvous);
        return savedRendezvous;
    }

    @Override
    public Rendezvous updateRendezvous(Rendezvous rendezvous) {
        Rendezvous savedRendezvous = rendezvousRepository.save(rendezvous);
        return savedRendezvous;
    }

    @Override
    public void deleteRendezvous(Long idRendezvous) {
        rendezvousRepository.deleteById(idRendezvous);
    }

    @Override
    public Rendezvous getRendezvous(Long idRendezvous) {
        Rendezvous gottenRendezvous = rendezvousRepository.findById(idRendezvous).orElse(null);
        return gottenRendezvous;
    }

    @Override
    public List<Analyse> getAllAnalyses() {
        return analyseRepository.findAll();
    }

    @Override
    public Analyse getOneAnalyse(String codeAnalyse) {
        Analyse gottenAnalyse = analyseRepository.findByCodeAnalyse(codeAnalyse);
        return gottenAnalyse;
    }

    @Override
    public Analyse saveAnalyse(Analyse analyse) {
        Analyse savedAnalyse = analyseRepository.save(analyse);
        return savedAnalyse;
    }

    @Override
    public List<Rendezvous> getAllRendezvous() {
        return rendezvousRepository.findAll();
    }
}
