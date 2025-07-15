package ma.enset.bloodbackend.SERVICES;

import ma.enset.bloodbackend.ENTITYS.Analyse;
import ma.enset.bloodbackend.ENTITYS.Rendezvous;

import java.util.List;

public interface MedicalAnalysisService {
    Rendezvous saveRendezvous(Rendezvous rendezvous);
    Rendezvous updateRendezvous(Rendezvous rendezvous);
    void deleteRendezvous(Long idRendezvous);

    Rendezvous getRendezvous(Long idRendezvous);

    List<Analyse> getAllAnalyses();
    Analyse getOneAnalyse(String codeAnalyse);
    Analyse saveAnalyse(Analyse analyse);

    List<Rendezvous> getAllRendezvous();
}
