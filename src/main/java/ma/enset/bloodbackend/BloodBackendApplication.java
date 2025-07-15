package ma.enset.bloodbackend;

import ma.enset.bloodbackend.ENTITYS.Analyse;
import ma.enset.bloodbackend.ENTITYS.Rendezvous;
import ma.enset.bloodbackend.SERVICES.MedicalAnalysisService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.Random;
import java.util.stream.Stream;

@SpringBootApplication
public class BloodBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BloodBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(MedicalAnalysisService medicalAnlaysisService) {
        return args -> {
            Stream.of(
                    new String[]{"Dupont", "Jean", "Sang", "Positif", "A123"},
                    new String[]{"Martin", "Claire", "Urine", "Négatif", "B456"},
                    new String[]{"Ali", "Khaled", "COVID", "Positif", "C789"},
                    new String[]{"Lara", "Sophie", "Sang", "Négatif", "D321"},
                    new String[]{"Nguyen", "Thi", "Radio", "Inconnu", "E654"},
                    new String[]{"Zhang", "Wei", "Scanner", "Anormal", "F987"},
                    new String[]{"Smith", "John", "IRM", "Normal", "G741"},
                    new String[]{"Lopez", "Maria", "Sang", "Élevé", "H852"},
                    new String[]{"Khan", "Amina", "COVID", "Négatif", "I963"},
                    new String[]{"Benali", "Youssef", "Urine", "Normal", "J159"}
            ).forEach(data -> {
                Analyse analyse = new Analyse();
                analyse.setNom(data[0]);
                analyse.setPrenom(data[1]);
                analyse.setTypeAnalyse(data[2]);
                analyse.setResultat(data[3]);
                analyse.setCodeAnalyse(data[4]);
                analyse.setDateAnalyse(LocalDate.now().minusDays(new Random().nextInt(30))); // Date aléatoire du mois
                medicalAnlaysisService.saveAnalyse(analyse);
            });

            Stream.of(
                    new String[]{"Jean Dupont", "0612345678", "Suivi médical"},
                    new String[]{"Claire Martin", "0623456789", "Résultat analyse"},
                    new String[]{"Khaled Ali", "0634567890", "Contrôle régulier"},
                    new String[]{"Sophie Lara", "0645678901", "Consultation COVID"},
                    new String[]{"Thi Nguyen", "0656789012", "Bilan complet"},
                    new String[]{"Wei Zhang", "0667890123", "Ordonnance renouvellement"},
                    new String[]{"John Smith", "0678901234", "Vaccination"},
                    new String[]{"Maria Lopez", "0689012345", "Scanner rendez-vous"},
                    new String[]{"Amina Khan", "0690123456", "Résultat de sang"},
                    new String[]{"Youssef Benali", "0601234567", "Consultation urgence"}
            ).forEach(data -> {
                Rendezvous rv = new Rendezvous();
                rv.setNom(data[0]);
                rv.setNumero(data[1]);
                rv.setMessage(data[2]);
                rv.setDate(LocalDate.now().plusDays(new Random().nextInt(15))); // Date dans les 15 prochains jours
                medicalAnlaysisService.saveRendezvous(rv);
            });

        };
    }

}
