package ma.enset.bloodbackend.REPOSITORY;

import ma.enset.bloodbackend.ENTITYS.Analyse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnalyseRepository extends JpaRepository<Analyse, Long> {
    Analyse findByCodeAnalyse(String codeAnalyse);
}
